//add interface that class Invoice can 'implements'
interface HasFormatter {
  format(): string; //here we say that whatever uses this interface must have a format method, that returns a string
}

export default HasFormatter;
