import MOVES_API from '../Utilities/Constants';


function getMoves() {

    fetch(MOVES_API)
        .then(response => {
            debugger;

        })
        .catch(error => {
            // todo: ensure this is coded
        });
}
