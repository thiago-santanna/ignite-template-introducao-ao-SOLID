import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  admin: boolean;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();

    if (!this.id) {
      this.id = uuidV4();
    }
  }

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getAdmin(): boolean {
    return this.admin;
  }
  getEmail(): string {
    return this.email;
  }
  getCreatedAt(): Date {
    return this.created_at;
  }
  getUpdatedAt(): Date {
    return this.updated_at;
  }
}

export { User };
