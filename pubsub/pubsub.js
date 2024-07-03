class PubSub {
    constructor() {
        this.topics = {};
    }

    subscribe(topic, listener) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(listener);
    }

    unsubscribe(topic, listener) {
        if (!this.topics[topic]) return;
        this.topics[topic] = this.topics[topic].filter(func => func !== listener);
    }

    publish(topic, data) {
        if (!this.topics[topic]) return;
        this.topics[topic].forEach(listener => listener(data));
    }
}

function subscribeFunction(param) {
    const pubsub = new PubSub();

    if (param === 1) {
        pubsub.subscribe('topic', firstFunction);
    } else {
        pubsub.unsubscribe('topic', secondFunction);
    }
}

function firstFunction() {
    console.log("Subscribed to firstFunction");
}

function secondFunction() {
    console.log("Unsubscribed from secondFunction");
}

subscribeFunction(1); 
// subscribeFunction(0); 
