export class Destinatario {
constructor(_id = '', name = '', rut = '', email = '', phone = 0,
bank = '',typeAccount = '', numberAccount = 0, monto = 0){
    this._id = _id;
    this.name=name;
    this.rut = rut;
    this.email = email;
    this.phone = phone;
    this.bank = bank;
    this.typeAccount = typeAccount;
    this.numberAccount = numberAccount;
    this.monto = monto;
}

    _id: string;
    name: string ;
    rut: string;
    email: string;
    phone: number;
    bank: string;
    typeAccount : string;
    numberAccount: number;
    monto:number;
}
