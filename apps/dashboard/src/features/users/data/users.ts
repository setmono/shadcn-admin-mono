export const users = Array.from({ length: 500 }, () => {
  const firstName = randomItem(firstNames);
  const lastName = randomItem(lastNames);

  return {
    id: uuid(),
    firstName,
    lastName,
    username: randomUsername(firstName, lastName),
    email: randomEmail(firstName),
    phoneNumber: randomPhone(),
    status: randomItem(["active", "inactive", "invited", "suspended"]),
    role: randomItem(["admin", "cashier", "manager"]),
    createdAt: randomPastDate(),
    updatedAt: randomRecentDate(),
  };
});

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uuid() {
  return crypto.randomUUID();
}

const firstNames = [
  "James",
  "Mary",
  "John",
  "Patricia",
  "Robert",
  "Jennifer",
  "Michael",
  "Linda",
  "William",
  "Elizabeth",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
];

function randomUsername(first: string, last: string) {
  return `${first}.${last}${randomInt(1, 999)}`.toLowerCase();
}

function randomEmail(first: string) {
  const domains = ["gmail.com", "outlook.com", "yahoo.com", "example.com"];
  return `${first.toLowerCase()}${randomInt(1, 999)}@${randomItem(domains)}`;
}

function randomPhone() {
  const countryCodes = ["+1", "+44", "+61", "+81", "+886"];
  return `${randomItem(countryCodes)} ${randomInt(100, 999)}-${randomInt(1000, 9999)}`;
}

function randomPastDate() {
  const now = Date.now();
  const past = now - randomInt(30, 365) * 24 * 3600 * 1000;
  return new Date(past);
}

function randomRecentDate() {
  const now = Date.now();
  const past = now - randomInt(1, 7) * 24 * 3600 * 1000;
  return new Date(past);
}
