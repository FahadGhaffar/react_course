function Model(prop) {

function cancelHandler(){

    prop.onCancel();


}

function confirmHandler(){

    prop.onConfirm();

}

    return (
        <div className="model">
            <p>Are You Sure</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>



        </div>



    );

}

export default Model;