import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer dfTqC2Eth1S6g01JqUKQAh7FXRX8IAHt_pVAKbnDkTn4FcMYYUeKSJGUWjp_MdWqW1xOSp7miHbMWCUWPdiSF_VTimSo_1oPcqO2yCGwYVbOfUPQm1M-NVs7Yk4hY3Yx",
  }
});

// Client ID
// IueBg55MRixOHePu-T-E5w

// API Key
// dfTqC2Eth1S6g01JqUKQAh7FXRX8IAHt_pVAKbnDkTn4FcMYYUeKSJGUWjp_MdWqW1xOSp7miHbMWCUWPdiSF_VTimSo_1oPcqO2yCGwYVbOfUPQm1M-NVs7Yk4hY3Yx