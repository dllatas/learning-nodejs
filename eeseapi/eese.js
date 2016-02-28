function EESE() {
    // Context
    function find_all_context() {
        return "SELECT * FROM ENVIRONMENT";
    }
    function find_one_context(id){
        return "SELECT * FROM ENVIRONMENT WHERE id = " + id;
    }
    // Pillar
    function find_all_pillar() {
        return "SELECT * FROM PILLAR";
    }
    function find_one_pillar(context, id) {
        return "SELECT * FROM PILLAR WHERE environment_id = " + context + " AND id = " + id;
    }
    // Source
    function find_all_source() {
        return "SELECT * FROM SOURCE";
    }
    function find_one_source(id) {
        return "SELECT * FROM SOURCE WHERE id = " + id;
    }
    // Region
    function find_all_region() {
        return "SELECT * FROM REGION";
    }
    function find_one_region(id) {
        return "SELECT * FROM REGION WHERE id = " + id;
    }
    // Country
    function find_all_country() {
        return "SELECT * FROM COUNTRY";
    }
    function find_one_country(id) {
        return "SELECT * FROM COUNTRY WHERE id = " + id;
    }
    // Return object
    return {
        findAllContext : find_all_context,
        findOneContext : find_one_context,
        findAllPillar  : find_all_pillar,
        findOnePillar  : find_one_pillar,
        findAllSource  : find_all_source,
        findOneSource  : find_one_source,
        findAllRegion  : find_all_region,
        findOneRegion  : find_one_region,
        findAllCountry : find_all_country,
        findOneCountry : find_one_country
    };
}

module.exports = EESE();
