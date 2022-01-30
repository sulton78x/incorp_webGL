import { Button, Modal, Typography } from "@supabase/ui"
import { useState } from "react"

export default function ModalCloseButton() {
  const [email, setEmail] = useState("")
  const [visible, setVisible] = useState(false)

  function toggle() {
    setVisible(!visible)
  }

  return (
    <>
      <Button onClick={toggle} type="default">
        Login
      </Button>
      <Modal
        closable
        title="Enter your Email to Register"
        description="Incorp is still in Pre-Sales... You'll be notified once we're ready to roll."
        visible={visible}
        onCancel={toggle}
        onConfirm={toggle}
      >
        <Typography.Text>
          {/* email input */}
          <form className="space-y-2">
            <label className="font-medium text-slate-900" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full border-none outline-none"
              onChange={e => setEmail(e.target.value)}
            />
          </form>
        </Typography.Text>
      </Modal>
    </>
  )
}
