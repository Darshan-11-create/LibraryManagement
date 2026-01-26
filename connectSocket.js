let stompCustomerClient=null;
let stompBookClient=null;
function connectSocket(onmsg){
    // let socket=new SockJS("/topic");
    const socket=new SockJS('http://localhost:8080/ws')
    stompBookClient=Stomp.over(socket);
     stompBookClient.connect({},()=>{
        stompBookClient.subscribe("/topic/books",(msg)=>{
            onmsg(JSON.parse(msg.body))
        })
     })       
}
function connectCustomerSocket(onmsg){
    // let socket=new SockJS("/topic");
    const socket=new SockJS('http://localhost:8080/ws')
    stompCustomerClient=Stomp.over(socket);
     stompCustomerClient.connect({},()=>{
        stompCustomerClient.subscribe("/topic/customer",(msg)=>{
            onmsg(JSON.parse(msg.body))
        })
     })       
}