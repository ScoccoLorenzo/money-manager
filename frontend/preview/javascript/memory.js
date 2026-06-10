export class Movement {
  constructor(type, value, scope, date, notes) {
    this.type = type
    this.value = Math.round(value * 100)
    this.scope = scope
    this.date = date
    this.notes = notes
  }
}