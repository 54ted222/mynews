import { useEffect, useRef } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TranscriptDialog({
  open,
  onClose,
  text,
}: {
  open: boolean
  onClose: () => void
  text: string
}) {
  const ref = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const handleBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === ref.current) onClose()
  }

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={handleBackdrop}
      className="m-auto w-[min(720px,calc(100vw-2rem))] max-h-[min(80vh,900px)] rounded-xl border border-border bg-background p-0 text-foreground shadow-xl backdrop:bg-black/40 open:flex open:flex-col"
    >
      <div className="flex items-center justify-between border-b px-5 py-3">
        <h2 className="font-serif text-lg font-semibold">語音逐字稿</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="關閉逐字稿"
        >
          <X />
        </Button>
      </div>
      <div className="overflow-y-auto px-5 py-4">
        <div className="prose prose-neutral max-w-none dark:prose-invert prose-p:leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
        </div>
      </div>
    </dialog>
  )
}
