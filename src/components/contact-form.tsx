import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0">
      <div className="bg-black text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-400 mb-8">
          Say something to start a live chat!
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span>📞</span>
            <span>+102 3456 789</span>
          </div>
          <div className="flex items-center gap-3">
            <span>✉️</span>
            <span>demo@gmail.com</span>
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          <a href="#" className="text-white hover:text-gray-300">
            𝕏
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            in
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            fb
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label>First Name</Label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Doe"
            />
          </div>
          <div>
            <Label>Last Name</Label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="John"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label>Email</Label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              type="tel"
              placeholder="+1 234 567 890"
            />
          </div>
        </div>

        <div>
          <Label>Select Subject?</Label>
          <RadioGroup
            defaultValue="general"
            className="grid grid-cols-2 gap-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="general" id="general" />
              <Label htmlFor="general">General Inquiry</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="specific" id="specific" />
              <Label htmlFor="specific">Specific Question</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label>Message</Label>
          <textarea
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Write your message..."
          />
        </div>

        <Button className="w-full bg-black text-white hover:bg-gray-800">
          Send Message
        </Button>
      </div>
    </div>
  );
}
