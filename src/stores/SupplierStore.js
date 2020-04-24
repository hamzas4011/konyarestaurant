//kan importere axios

const SupplierStore = {

    //store state som inneholder sponsors som følgende komponenter trenger... og derfor fornuftig å ha store
    state: {
        supplier: [
            { id: 100, name: "Asko" },
            { id: 101, name: "Tine" }
        ]
    },

    setSupplier(){
        //axios-kall for å sette this.state.supplier = result.data
    },

    getSupplier(){
        return this.state.supplier.map( supplier => supplier );
    }

}

export default SupplierStore;