import {db} from '../firebase';
export const getInvoices = async()=>{
    // await db.collection('invoices').doc().set(object); this is the way to save or write an object into db
    const querySnapshot = await db.collection('invoices').get();
    return querySnapshot
}