import { openDB, type IDBPDatabase } from "idb"

const DB_NAME = "mynews"
const DB_VERSION = 1
const STORE = "ai-audio"

type CacheEntry = {
  key: string
  blob: Blob
  mime: string
  createdAt: number
  bytes: number
  signature: string
}

let dbPromise: Promise<IDBPDatabase> | null = null

function getDB(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: "key" })
        }
      },
    })
  }
  return dbPromise
}

export function audioKey(slug: string, signature: string): string {
  return `${slug}::${signature}`
}

export async function getCachedAudio(
  slug: string,
  signature: string
): Promise<CacheEntry | undefined> {
  const db = await getDB()
  const entry = (await db.get(STORE, audioKey(slug, signature))) as
    | CacheEntry
    | undefined
  if (!entry) return undefined
  if (entry.signature !== signature) return undefined
  return entry
}

export async function putCachedAudio(
  slug: string,
  signature: string,
  blob: Blob,
  mime: string
): Promise<void> {
  const db = await getDB()
  const entry: CacheEntry = {
    key: audioKey(slug, signature),
    blob,
    mime,
    bytes: blob.size,
    signature,
    createdAt: Date.now(),
  }
  await db.put(STORE, entry)
}

export async function deleteCachedAudio(
  slug: string,
  signature?: string
): Promise<void> {
  const db = await getDB()
  if (signature) {
    await db.delete(STORE, audioKey(slug, signature))
    return
  }
  const all = (await db.getAll(STORE)) as CacheEntry[]
  const tx = db.transaction(STORE, "readwrite")
  for (const entry of all) {
    if (entry.key.startsWith(`${slug}::`)) {
      await tx.store.delete(entry.key)
    }
  }
  await tx.done
}

export async function listCachedAudio(): Promise<CacheEntry[]> {
  const db = await getDB()
  return (await db.getAll(STORE)) as CacheEntry[]
}

export async function clearAllCachedAudio(): Promise<void> {
  const db = await getDB()
  await db.clear(STORE)
}
