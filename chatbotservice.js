const responseObj = {
    hello : "Hey! How are you doing ?",
    hey : "Hey! What's Up",
    today : new Date().toDateString(),
    time : new Date().toLocaleTimeString(),
    hi : "Hi, How are you ?",
    appoinment : "wait...",
    let : "Let us know aboout youtube : click me "
}

const fetchResponse = (userInput) => {
    return new Promise((res, reject) => {
        try {
            setTimeout(() => {
                res(responseObj[userInput]);
            }, 1200);
            // res(responseObj[userInput]);
        } catch (error) {
            reject(error);
        }
    });
    // return responseObj[userInput];
};

const chatBotService = {
    getBotResponse(userInput) {
        return fetchResponse(userInput);
    },
};

export default chatBotService;