import connection from "../conn_bin"

export function Environment() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            let statement = "select * from ENVIRONMENT";
            let response = (err, result) => {
                con.release();
                res.send(result);
            };
            con.query(statement, response);
        });
    };
}
