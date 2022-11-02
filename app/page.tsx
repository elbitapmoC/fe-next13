import Pill from './(pill)/page'
import Link from 'next/link'
export default function HomePage() {
  return (
    <div className="main">
      <div className="grid grid-cols-2 gap-12">
        <Link href="providers">
          <Pill
            text="Provider"
            label="Create new patients & write prescriptions.
                See patients and their prescriptions."
            position="left"
            imgSource="/images/provider.jpg"
            imgAlt="healcare providers to educate people about prevention, cures and other such tips"
          />
        </Link>
        <Link href="/pharmacists">
          <Pill
            text="Pharmacist"
            label="See prescriptions and change their status' (pending, wip, or filled)"
            position="right"
            imgSource="/images/pharmacist.jpg"
            imgAlt="pharmacists to dispense prescription medications to patients and offer expertise in the safe use of prescriptions. "
          />
        </Link>
      </div>
    </div>
  )
}
