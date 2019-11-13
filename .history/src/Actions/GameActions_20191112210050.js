import MOVES_API from '../Utilities/Constants';


function getMoves() {

    fetch(`${MOVES_API}?moves=[]`)
        .then(response => {
            debugger;
            
        })
        .catch(error => {
            // todo: ensure this is coded
            debugger;
        });
}

export {
    getMoves,
};
