const EmployeeStore = {

    //store state som inneholder employee som følgende komponenter trenger... og derfor fornuftig å ha store
    //Inneholder informasjon om alle ansatte som jobber i Konya Restautant.
    state: {
        employee: [
            { id: 201, name: "Ola Skjelvik", tlf:"90002001", email:"ola@konya.no", adress:"osloveien 91" },
            { id: 301, name: "Petter Kristoffersen", tlf:"90003001", email:"petter@konya.no", adress:"fjellveien 101" },
            { id: 401, name: "Kristine Dal", tlf:"90004001", email:"kristine@konya.no", adress:"Smestadslett 4" },
            { id: 501, name: "Martine fjell", tlf:"90005001", email:"martinea@konya.no", adress:"Bølerskogen 111" },
        ]
    },

   
    getEmployee(){
        return this.state.employee.map( employee => employee );
    }

}

export default EmployeeStore;
