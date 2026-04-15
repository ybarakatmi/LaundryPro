/** 30-minute preference slots from 6:00 AM through 1:00 AM (overnight). */
export function getPreferredTimeSlots(): string[] {
  const slots: string[] = [];

  const pushSlot = (hour24: number, minute: number) => {
    const period = hour24 >= 12 ? "PM" : "AM";
    const h12 = ((hour24 + 11) % 12) + 1;
    const mm = minute.toString().padStart(2, "0");
    slots.push(`${h12}:${minute === 0 ? "00" : mm} ${period}`);
  };

  for (let h = 6; h <= 23; h++) {
    pushSlot(h, 0);
    pushSlot(h, 30);
  }

  slots.push("12:00 AM", "12:30 AM", "1:00 AM");
  return slots;
}
