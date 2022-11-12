export default interface User {
  uid: string;
  email: string | null;
  username: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
}

export class UserValues implements User {
  uid: string;
  email: string | null;
  username: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  constructor({
    uid,
    email,
    username,
    phoneNumber,
    photoURL,
  }: {
    uid: string;
    email: string | null;
    username: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
  }) {
    this.uid = uid;
    this.email = email;
    this.username = username;
    this.phoneNumber = phoneNumber;
    this.photoURL = photoURL;
  }
}
