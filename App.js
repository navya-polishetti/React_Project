import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="food-logo"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  )
}
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
const restroList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "2498",
        name: "Vasista's Sri Lakshmi",
        uuid: "c21a1b89-7f6b-4c6a-a055-6f1cfa581581",
        city: "3",
        area: "Shaikpet",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "gk9lfkobvwgurghaevbn",
        cuisines: [
          "Biryani",
          "Tandoor",
          "Chinese",
          "North Indian",
          "South Indian",
        ],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        slaString: "22 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant: "vasistas-srilakshmi-manikonda",
          city: "hyderabad",
        },
        cityState: "3",
        address:
          "Vasista's Srilakshmi Curry Point, Opposit Shivalayam Temple,, OU Colony, Shaikpet, Hyderabad, Telangana 500008",
        locality: "Whisper Valley Road",
        parentId: 387872,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5820236~p=4~eid=00000186-2b5f-5d8e-18d8-b71600b40458",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "2498",
          deliveryTime: 22,
          minDeliveryTime: 22,
          maxDeliveryTime: 22,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "25251",
        name: "Meridian Restaurant",
        uuid: "41eab84b-b00a-457d-80c8-5a62fadc4790",
        city: "3",
        area: "Punjagutta",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
        cuisines: ["Biryani", "Chinese", "North Indian", "Kebabs"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 7.400000095367432,
        slugs: {
          restaurant: "meridian-cafe-restaurant-panjagutta-banjara-hills",
          city: "hyderabad",
        },
        cityState: "3",
        address: "6-3-694/1 &697, Panjagutta main road",
        locality: "Panjagutta main road",
        parentId: 19276,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 1,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "7.4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "25251",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 7.400000095367432,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "IT_IS_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "436805",
        name: "Lucky Multicuisine Restaurant",
        uuid: "ff39450a-e0b0-440b-8ff4-d5dfe4359dbb",
        city: "3",
        area: "Madhapur",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "n2kt3noplim3agty9ox8",
        cuisines: ["Biryani", "North Indian", "Tandoor", "South Indian"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 3.5999999046325684,
        slugs: {
          restaurant: "lucky-multicuisine-restaurant-madhapur-madhapur",
          city: "hyderabad",
        },
        cityState: "3",
        address: "1-74/2, Guttalabegumpet, Madhapur, Hyderabad - 500019",
        locality: "Guttalabegumpet",
        parentId: 18963,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "436805",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 3.5999999046325684,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.5",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "173153",
        name: "Big Bowl",
        uuid: "dc69cd7c-4b79-4e7d-b009-8a1cd38c3a66",
        city: "3",
        area: "Jubilee Hills",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "dpv66yavv7r3mt4cq5ki",
        cuisines: ["Chinese"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 2.200000047683716,
        slugs: {
          restaurant: "big-bowl-cbi-colony-jubilee-hills",
          city: "hyderabad",
        },
        cityState: "3",
        address:
          "SVM Mall, Rd Number 36, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033",
        locality: "CBI Colony",
        parentId: 3829,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5819997~p=7~eid=00000186-2b5f-5d8e-18d8-b71700b4076d",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "173153",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 2.200000047683716,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.7",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "6336",
        name: "Spicy Restaurant",
        uuid: "aaaaad7b-1fe0-4eb3-b158-0865e8b36147",
        city: "3",
        area: "Yousufguda",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "cdmzv99zcatsejcqtbgb",
        cuisines: [
          "Biryani",
          "Tandoor",
          "Chinese",
          "North Indian",
          "Desserts",
          "Kebabs",
          "Mughlai",
        ],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 4.300000190734863,
        slugs: {
          restaurant:
            "spicy-restaurant-srinagar-colony-main-road-banjara-hills",
          city: "hyderabad",
        },
        cityState: "3",
        address:
          "8-3-231/w/73, Indira Nagar cross road, Banjara Hills, Hyderabad",
        locality: "Indira Nagar Cross Road",
        parentId: 393665,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 1,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "6336",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 4.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "IT_IS_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.7",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "342463",
        name: "KFC",
        uuid: "059d308f-53fc-4f98-9051-92cec305f765",
        city: "3",
        area: "Tolichowki",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        slaString: "29 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant: "kfc-tolichowki-tolichowki",
          city: "hyderabad",
        },
        cityState: "3",
        address:
          "K.F.C at Ground Floor, D Block, West World bearing No- 8-1-301, 8-1-302 & 8-1-303, Old Survey No- 337/625, Shaikpet Village and Mandal,Hyderabad,Hyderabad Central Zone,Telangana-500033",
        locality: "Shaikpet Village",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5908940~p=10~eid=00000186-2b5f-5d8e-18d8-b71800b40a11",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "342463",
          deliveryTime: 29,
          minDeliveryTime: 29,
          maxDeliveryTime: 29,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.6",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "3636",
        name: "Kakatiya Mess",
        uuid: "6582f779-6e6c-42c4-977f-d4a4596fdd72",
        city: "3",
        area: "Punjagutta",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "l4ppu8o6nhdospxcnrkh",
        cuisines: ["Andhra", "Biryani"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 6.800000190734863,
        slugs: {
          restaurant: "kakatiya-mess-ameerpet-road-ameerpet",
          city: "hyderabad",
        },
        cityState: "3",
        address: "Behind J C Brothers,Ameerpet, Hyderabad",
        locality: "Ameerpet Road",
        parentId: 19237,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "Closes soon",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "3636",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 6.800000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.3",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "1091",
        name: "Hitech Bawarchi",
        uuid: "d0fa83e4-2c2b-4c34-8766-2822321eb51a",
        city: "3",
        area: "Gachibowli",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "tgqctbhbkeij8qj6cwg0",
        cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 6.300000190734863,
        slugs: {
          restaurant: "hitech-bawarchi-indiranagar-gachibowli",
          city: "hyderabad",
        },
        cityState: "3",
        address:
          "MIG 134 APHB colony Back side DLF, opp christ church, gachibowli hyd",
        locality: "Indiranagar",
        parentId: 403753,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 1,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "1091",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 6.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "IT_IS_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.6",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "328934",
        name: "Raju Gari Biryani",
        uuid: "ea21b5d5-e90a-4219-8407-06447491b729",
        city: "3",
        area: "Manikonda",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "ymiu9cp97z3tow0kknlv",
        cuisines: ["Biryani", "North Indian", "Snacks", "Mughlai", "Chinese"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant: "rajugaribiryani-manikonda-manikonda",
          city: "hyderabad",
        },
        cityState: "3",
        address: "483, OU Colony, Shaikpet, Hyderabad, Telangana 500008, India",
        locality: "Manikonda",
        parentId: 165947,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5820050~p=13~eid=00000186-2b5f-5d8e-18d8-b71900b40d67",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "328934",
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.8",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
]

//{KFC.name} src="{KFC.Image}" {KFC.cuisines} {KFC.travel}
console.log(restroList)
//static data
const KFC = {
  name: "KFC",
  image: "",
  cuisines: ["American", "Burgers"],
  travel: 10,
}
/* 1.Ways of passing data(arguements) to params(props), here restroList has array of objects and whenever we pass the data to functional components is like <RestroCard restro = {restroList[0]} /> this following expression is nothing but RestroCard(restroList[0]) and to render the data ypu need to pass the props to your RestroCard = (props) this props holds our data object in this case and takes data and puts in the RestroCard and our body renders the data of all objects.

2.another way to destrcture object data like this RestroCard=({restro})
const { name, cloudinaryImageId, cuisines, lastMileTravel } == restro.data.data

3.there is another way to get the data without even having the const { name, cloudinaryImageId, cuisines, lastMileTravel } == restro.data.data and you can directly have the object destrcture on the fly const RestroCard = ({ name, cloudinaryImageId, cuisines, lastMileTravel }) , but in the body component yopu need to make changes as it is a object you need to specify the object property with its data <RestroCard name ={restroList[0].data.data.name}
cuisines ={restroList[0].data.data.cuisines/> and so on for each array of object. 

4. using map function you can map the each array of object with restro elements please see the implementation in the body component*/

const RestroCard = ({ name, cloudinaryImageId, cuisines, lastMileTravel }) => {
  return (
    <div className="restro-card">
      <img
        alt="food-image"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{lastMileTravel} mins</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restro-list">
      {restroList.map((restro) => {
        return <RestroCard {...restro.data.data} key={restro.data.data.id} />
      })}

      {/*<RestroCard {...restroList[0].data.data} />
      <RestroCard {...restroList[1].data.data} />
      <RestroCard {...restroList[2].data.data} />
      <RestroCard {...restroList[3].data.data} />
      <RestroCard {...restroList[4].data.data} />
      <RestroCard {...restroList[5].data.data} />
      <RestroCard {...restroList[6].data.data} />
      <RestroCard {...restroList[7].data.data} />
      <RestroCard {...restroList[8].data.data} /> */}
    </div>
  )
}

const Footer = () => {
  return <h4>Footerrrrrrrrrrr</h4>
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
