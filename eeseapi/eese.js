function EESE() {
    //
    function find_all_context() {
        return "SELECT * FROM ENVIRONMENT";
    }
    function find_one_context(id){
        console.log(typeof(id));
        //if !=NUMBER
        return "SELECT * FROM ENVIRONMENT WHERE id = " + id;
    }
    // Return object
    return {
        findAllContext: find_all_context(),
        findOneContext: find_one_context,
    };
}

module.exports = EESE();
