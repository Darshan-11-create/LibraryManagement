let stompCustomerClient=null;
let stompBookClient=null;
function connectSocket(onmsg){
    // let socket=new SockJS("/topic");
    const socket=new SockJS('https://librarymanagementbackend-d5pk.onrender.com/ws')
    stompBookClient=Stomp.over(socket);
     stompBookClient.connect({},()=>{
        stompBookClient.subscribe("/topic/books",(msg)=>{
            onmsg(JSON.parse(msg.body))
        })
     })       
}
function connectCustomerSocket(onmsg){
    // let socket=new SockJS("/topic");
    const socket=new SockJS('https://librarymanagementbackend-d5pk.onrender.com/ws')
    stompCustomerClient=Stomp.over(socket);
     stompCustomerClient.connect({},()=>{
        stompCustomerClient.subscribe("/topic/customer",(msg)=>{
            onmsg(JSON.parse(msg.body))
        })
     })       
}
