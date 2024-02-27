<></> => Fragment

{} => Evaluated Expression is expected, we can not write if else or something

Hook => useState => [counter, setCounter] => Here setCounter is just naming convention, you can use any name

For updates in Virtual DOM => It uses React Fiber Algorithm

```js
const addValue = () => {
    // counter = 15
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    // counter will be 16 not 19 because react send updates in batches

    // to fix it use callback
    // counter = 15
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    // counter will be 19
}
```
Use Link Tag from react-router-dom instead of anchor tag so that it does not refresh page

--- 

Redux

store - single source of truth [there is only one across whole project]

reducers - to change anything in store

useSelector - select value from store 
useDispatch - send value to store

reducers is an object having functionalities, every functions inside reducers have 2 things, state and action

state => current state[data]
action => to recieve data to perform customized action


---