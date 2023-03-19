import { useRef, useEffect } from "react";

function MyRxJsComponent() {

//     // get a reference to the button (use <button ref={buttonRef} in your component)
//     const buttonRef = useRef(null)
    
//     // use useEffect to tell React that something outside of its 
//     // control is going to happen (note how the return is _another_ 
//     // function that unsubscribes.
//     useEffect( () => {

//         // create the observable from the buttonRef we created
//         const clicks$ = FormDataEvent(buttonRef.current, 'click')

//         clicks$.subscribe( click => {

//             // do whatever you need to with the click event
//             console.log('button was clicked!', click)
//         })
    
//         return () => {
//             start$.unsubscribe()
//         }
//     }, [buttonRef]);

//     return <button ref={buttonRef}>Click me!</button>;
}

export default MyRxJsComponent;