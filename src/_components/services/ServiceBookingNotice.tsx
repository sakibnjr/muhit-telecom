import { CheckCircle } from 'lucide-react';

export function ServiceBookingNotice({ name, onReturn }: { name: string; onReturn: () => void }) {
  return (
    <div id="booking-form" role="status" className="bg-card border border-border rounded-lg p-6 sm:p-8 text-center space-y-4">
      <CheckCircle className="w-8 h-8 text-primary mx-auto" />
      <h3 className="text-lg font-bold">Continue your request in WhatsApp</h3>
      <p className="text-sm text-muted-foreground max-w-md mx-auto">
        Thank you, {name}. Send the prepared message in WhatsApp to share your request.
        If no window opened, return to the form and try again or call 01910-755835.
        This form does not save a booking or confirm a repair slot.
      </p>
      <button type="button" onClick={onReturn} className="text-sm text-primary font-bold hover:underline">
        Return to request form
      </button>
    </div>
  );
}
