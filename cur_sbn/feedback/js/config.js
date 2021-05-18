var config = {
    host: "https://pds.nasa.gov", // Email Server Host
    feedback: {
        header: "Help Desk",
        feedbackType: "Comment,Question,Problem/Bug,Kudos,Other",
        additionalLinks: [{
                title: "Information for Data Users",
                url: "https://pdssbn.astro.umd.edu/howto/understand_PDS4.shtml"
            },
            {
                title: "Information for Proposers",
                url: "https://pdssbn.astro.umd.edu/proposals/ROSES.shtml"
            },
            {
                title: "Information for Providers",
                url: "https://pdssbn.astro.umd.edu/howto/prepare_PDS4.shtml"
            },
            {
                title: "Site Map",
                url: "https://pdssbn.astro.umd.edu/sitemap.shtml"
            }
        ]
    },
    tab: {
        label: "Need Help?", // default: Need Help?
        color: "#0b3d91", // default: #0b3d91
        fontColor: "#ffffff", // default: #ffffff
        fontSize: "16", // default: 16
        size: {
            width: "150", // default: 150
            height: "60" // default: 60
        },
        placement: {
            side: "right", // default: right
            offset: "50" // default: 50
        }
    }
};