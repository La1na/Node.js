export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean = false
      ) {}

      setSuperAdminStatus(status: boolean) {
        this.isSuperAdmin = status;
      }

      displayInfo(): void {
        console.log(
          `Admin: ${this.name}, Email: ${this.email}, Super Admin: ${this.isSuperAdmin}`
        );
      }
    }
  }
}
