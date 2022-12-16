export default interface eventType {
  change: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  submit: React.FormEvent<HTMLFormElement>;
}
