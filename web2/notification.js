const ethers = require('ethers');
const PushAPI = require('@pushprotocol/restapi');

const pKey = process.env.PUSH_PRIVATE_KEY;
console.log(pKey);
const signer = new ethers.Wallet(pKey);

const sendNotification = async (ad_id, image_url, ad_name, event) => {
    try {
        const apiResponse = await PushAPI.payloads.sendNotification({
            signer,
            type: 3, // target
            identityType: 2, // direct payload
            notification: {
                title: `Analytics`,
                body: `New analytics data is available`
            },
            payload: {
                title: `${event} event`,
                body: `New ${event} received for ${ad_name}`,
                cta: 'CTA',
                img: image_url
            },
            recipients: `eip155:5:${'0x0d4cF3dD17316E22454C3fe0AAdC543e2C49b7cc'}`, // recipient address
            channel: 'eip155:5:0x4D92c9a3Db746bD0Fb65957eA6054D9d07d90412', // your channel address
            env: 'staging'
        });

        // apiResponse?.status === 204, if sent successfully!
        console.log('API response: ', apiResponse);
    } catch (err) {
        console.error('Error: ', err);
    }
};

module.exports = {
    sendNotification
};
