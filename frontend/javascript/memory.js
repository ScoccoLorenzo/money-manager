export const data = [];

export class Movement {
  constructor(type, value, scope, date, notes) {
    this.type = type
    this.value = value * 100
    this.scope = scope
    this.date = date
    this.notes = notes
  }
}