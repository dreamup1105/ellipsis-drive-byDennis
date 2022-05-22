exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match("/blog/")) {
    page.matchPath = "/blog/*"
    createPage(page)
  }

  if (page.path.match("/solution/")) {
    page.matchPath = "/solution/*"
    createPage(page)
  }
}

const OLD_BLOGS = [
  "how-is-gis-used-in-conservation-biology",
  "what-you-need-to-know-about-uavs-and-gis-management",
  "spatial-and-temporal-gis-analysis-using-change-detection",
  "top-applications-of-gis",
  "how-is-geospatial-technology-improving-defense-intelligence",
  "a-smart-and-efficient-way-to-manage-water-resources",
  "gis-and-remote-sensing",
  "st-and-ellipsis-drive-form-strategic-partnership",
  "how-does-gis-and-the-cloud-work-together",
  "the-genesis-of-ellipsis-drive",
  "drones-and-their-impact-on-gis-mapping",
  "using-remote-sensing-data-to-create-actionable-insights",
  "is-location-intelligence-the-key-to-a-profitable-business",
  "how-are-drones-used-in-asset-management",
  "how-geospatial-technology-is-vital-for-exploring-mars",
  "how-does-gis-bolster-citizen-science",
  "uavs-and-gis-what-you-need-to-know",
  "4-steps-to-share-your-spatial-data-with-the-world",
  "seamless-delivery-of-remote-sensing-analytics-to-clients",
  "how-remote-sensing-makes-geospatial-data-collection",
  "the-sustainable-way-of-doing-business",
  "preserving-the-dutch-grasslands",
  "why-cartography-still-matters",
  "ellipsis-drive-3d-viewer-announcement",
  "how-geocoding-can-be-the-secret-to-selling-more-products",
  "analysing-and-sharing-3d-point-cloud-data",
  "the-a-to-zs-of-remote-sensing",
  "monitoring-droughts-in-the-netherlands",
  "what-are-the-uses-of-3d-gis",
  "location-intelligence-the-core-of-digital-transformation",
  "protecting-the-earths-green-cover",
  "satellite-radar-data-to-monitor-land-subsidence",
  "satellite-radar-data-in-flood-monitoring",
  "ethics-in-gis-an-overview",
  "drones-in-agriculture",
  "the-impact-of-gis-technology-on-disaster-response",
  "how-do-businesses-use-gis-in-marketing",
  "aerial-imagery-in-urbanmunicipal-change-detection",
  "adding-flexibility-to-the-nso-data-portal",
  "compiling-and-sharing-geoinformation-in-the-schiphol",
  "how-the-roadwork-industry-can-benefit-from-gis-technology",
  "how-will-the-geospatial-industry-change-in-the-fourth",
  "cad-and-gis-are-two-types-of-spatial-software.-geographical",
  "sharing-field-status-for-higher-sugarcane-yields",
  "defining-spatial-data-science",
  "mapping-and-geographic-information-systems-what-is-it",
  "gathering-clay-data-for-optimal-excavation",
  "drone-data-acquisition-for-detailed-mapping-of-crucial",
  "selling-spatial-data",
  "predictive-modeling-for-safer-roads",
  "ellipsis-drive-funding-announcement",
  "automated-change-detection-for-optimized-water-management",
  "real-time-habitat-mapping-for-better-engineering",
  "5-myths-about-location-intelligence"
];

const OLD_SOLUTIONS = [
  "data-delivery-and-integration",
  "dynamic-results-sharing",
  "off-the-shelf-back-end-and-front-end-capabilities"

];

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions

  for (let i = 0; i < OLD_BLOGS.length; i++) {
    createRedirect({ fromPath: `/${OLD_BLOGS[i]}`, toPath: `/blog/${OLD_BLOGS[i]}`, redirectInBrowser: true, isPermanent: true });
  }

  for (let i = 0; i < OLD_SOLUTIONS.length; i++) {
    createRedirect({ fromPath: `/${OLD_SOLUTIONS[i]}`, toPath: `/solution/${OLD_SOLUTIONS[i]}`, redirectInBrowser: true, isPermanent: true });
  }

  createRedirect({ fromPath: `/4-steps-to-set-up-your-geospatial-data-with-the-world`, toPath: `/blog/4-steps-to-share-your-spatial-data-with-the-world`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/4-steps-to-set-up-your-geospatial-data-with-the-world/`, toPath: `/blog/4-steps-to-share-your-spatial-data-with-the-world`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/4-steps-to-share-your-spatial-data-with-the-world`, toPath: `/blog/4-steps-to-share-your-spatial-data-with-the-world`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/4-steps-to-share-your-spatial-data-with-the-world/`, toPath: `/blog/4-steps-to-share-your-spatial-data-with-the-world`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/adding-flexibility-to-the-nso-data-portal`, toPath: `/blog/adding-flexibility-to-the-nso-data-portal`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/adding-flexibility-to-the-nso-data-portal/`, toPath: `/blog/adding-flexibility-to-the-nso-data-portal`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/aerial-imagery-in-urban-municipal-change-detection`, toPath: `/blog/aerial-imagery-in-urbanmunicipal-change-detection`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/aerial-imagery-in-urban-municipal-change-detection/`, toPath: `/blog/aerial-imagery-in-urbanmunicipal-change-detection`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/analysing-and-sharing-3d-point-cloud-data-with-a-simple-weblink`, toPath: `/blog/analysing-and-sharing-3d-point-cloud-data`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/analysing-and-sharing-3d-point-cloud-data-with-a-simple-weblink/`, toPath: `/blog/analysing-and-sharing-3d-point-cloud-data`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/a-smart-and-efficient-way-to-manage-water-resources-in-california`, toPath: `/blog/a-smart-and-efficient-way-to-manage-water-resources`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/a-smart-and-efficient-way-to-manage-water-resources-in-california/`, toPath: `/blog/a-smart-and-efficient-way-to-manage-water-resources`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/balance`, toPath: `/pricing`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/balance/`, toPath: `/pricing`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/billing`, toPath: `/pricing`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/billing/`, toPath: `/pricing`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/billing/pricing`, toPath: `/pricing`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/billing/pricing/`, toPath: `/pricing`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/billing/storage`, toPath: `/pricing`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/billing/storage/`, toPath: `/pricing`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/breaking-down-the-difference-between-gis-and-cad`, toPath: `/blog/cad-and-gis-are-two-types-of-spatial-software.-geographical`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/breaking-down-the-difference-between-gis-and-cad/`, toPath: `/blog/cad-and-gis-are-two-types-of-spatial-software.-geographical`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/bureau-wetering`, toPath: `/blog/real-time-habitat-mapping-for-better-engineering`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/bureau-wetering/`, toPath: `/blog/real-time-habitat-mapping-for-better-engineering`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/bureau-wetering-two`, toPath: `/blog/real-time-habitat-mapping-for-better-engineering`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/bureau-wetering-two/`, toPath: `/blog/real-time-habitat-mapping-for-better-engineering`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/compiling-and-sharing-geoinformation-in-the-schiphol-region`, toPath: `/blog/compiling-and-sharing-geoinformation-in-the-schiphol`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/compiling-and-sharing-geoinformation-in-the-schiphol-region/`, toPath: `/blog/compiling-and-sharing-geoinformation-in-the-schiphol`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/defining-spatial-data-science`, toPath: `/blog/defining-spatial-data-science`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/defining-spatial-data-science/`, toPath: `/blog/defining-spatial-data-science`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/dokdata`, toPath: `/blog/predictive-modeling-for-safer-roads`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/dokdata/`, toPath: `/blog/predictive-modeling-for-safer-roads`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/drive/projects`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/drive/projects/`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/drones-and-their-impact-on-gis-mapping`, toPath: `/blog/drones-and-their-impact-on-gis-mapping`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/drones-and-their-impact-on-gis-mapping/`, toPath: `/blog/drones-and-their-impact-on-gis-mapping`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/drones-in-agriculture`, toPath: `/blog/drones-in-agriculture`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/drones-in-agriculture/`, toPath: `/blog/drones-in-agriculture`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/ellipsis-drive-3d-viewer-announcement`, toPath: `/blog/ellipsis-drive-3d-viewer-announcement`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/ellipsis-drive-3d-viewer-announcement/`, toPath: `/blog/ellipsis-drive-3d-viewer-announcement`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/ellipsis-drive-funding-announcement`, toPath: `/blog/ellipsis-drive-funding-announcement`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/ellipsis-drive-funding-announcement/`, toPath: `/blog/ellipsis-drive-funding-announcement`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/ellipsis-logo.png`, toPath: `/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/ellipsis-logo.png/`, toPath: `/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/ethics-in-gis-an-overview`, toPath: `/blog/ethics-in-gis-an-overview`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/ethics-in-gis-an-overview/`, toPath: `/blog/ethics-in-gis-an-overview`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/explore`, toPath: `/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/explore/`, toPath: `/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/faq`, toPath: `https://docs.ellipsis-drive.com/extra/faq`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/faq/`, toPath: `https://docs.ellipsis-drive.com/extra/faq`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/gallery`, toPath: `/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/gallery/`, toPath: `/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/gis-and-remote-sensing-a-foundation-for-next-generation-civil-engineering`, toPath: `/blog/gis-and-remote-sensing`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/gis-and-remote-sensing-a-foundation-for-next-generation-civil-engineering/`, toPath: `/blog/gis-and-remote-sensing`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/help-center`, toPath: `https://docs.ellipsis-drive.com/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/help-center/`, toPath: `https://docs.ellipsis-drive.com/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/helpcenter`, toPath: `https://docs.ellipsis-drive.com/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/helpcenter/`, toPath: `https://docs.ellipsis-drive.com/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-are-drones-used-in-asset-management`, toPath: `/blog/how-are-drones-used-in-asset-management`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-are-drones-used-in-asset-management/`, toPath: `/blog/how-are-drones-used-in-asset-management`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-does-gis-and-the-cloud-work-together`, toPath: `/blog/how-does-gis-and-the-cloud-work-together`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-does-gis-and-the-cloud-work-together/`, toPath: `/blog/how-does-gis-and-the-cloud-work-together`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-does-gis-bolster-citizen-science`, toPath: `/blog/how-does-gis-bolster-citizen-science`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-does-gis-bolster-citizen-science/`, toPath: `/blog/how-does-gis-bolster-citizen-science`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-geocoding-can-be-the-secret-to-selling-more-products`, toPath: `/blog/how-geocoding-can-be-the-secret-to-selling-more-products`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-geocoding-can-be-the-secret-to-selling-more-products/`, toPath: `/blog/how-geocoding-can-be-the-secret-to-selling-more-products`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-geospatial-technology-is-vital-for-exploring-mars`, toPath: `/blog/how-geospatial-technology-is-vital-for-exploring-mars`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-geospatial-technology-is-vital-for-exploring-mars/`, toPath: `/blog/how-geospatial-technology-is-vital-for-exploring-mars`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-is-geospatial-technology-improving-defense-intelligence`, toPath: `/blog/how-is-geospatial-technology-improving-defense-intelligence`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-is-geospatial-technology-improving-defense-intelligence/`, toPath: `/blog/how-is-geospatial-technology-improving-defense-intelligence`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-is-gis-addressing-global-challenges`, toPath: `/blogs`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-is-gis-addressing-global-challenges/`, toPath: `/blogs`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-is-gis-used-in-conservation-biology`, toPath: `/blog/how-is-gis-used-in-conservation-biology`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-is-gis-used-in-conservation-biology/`, toPath: `/blog/how-is-gis-used-in-conservation-biology`, redirectInBrowser: true, isPermanent: true });


  createRedirect({ fromPath: `/how-remote-sensing-makes-geospatial-data-collection-more-accessible`, toPath: `/blog/how-remote-sensing-makes-geospatial-data-collection`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-remote-sensing-makes-geospatial-data-collection-more-accessible/`, toPath: `/blog/how-remote-sensing-makes-geospatial-data-collection`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-the-roadwork-industry-can-benefit-from-gis-technology`, toPath: `/blog/how-the-roadwork-industry-can-benefit-from-gis-technology`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-the-roadwork-industry-can-benefit-from-gis-technology/`, toPath: `/blog/how-the-roadwork-industry-can-benefit-from-gis-technology`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/how-will-the-geospatial-industry-change-in-the-fourth-industrial-revolution`, toPath: `/blog/how-will-the-geospatial-industry-change-in-the-fourth`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/how-will-the-geospatial-industry-change-in-the-fourth-industrial-revolution/`, toPath: `/blog/how-will-the-geospatial-industry-change-in-the-fourth`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/ilionx`, toPath: `/blog/automated-change-detection-for-optimized-water-management`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/ilionx/`, toPath: `/blog/automated-change-detection-for-optimized-water-management`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/is-location-intelligence-the-key-to-a-profitable-business`, toPath: `/blog/is-location-intelligence-the-key-to-a-profitable-business`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/is-location-intelligence-the-key-to-a-profitable-business/`, toPath: `/blog/is-location-intelligence-the-key-to-a-profitable-business`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/location-intelligence-the-core-of-digital-transformation-for-gis`, toPath: `/blog/location-intelligence-the-core-of-digital-transformation`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/location-intelligence-the-core-of-digital-transformation-for-gis/`, toPath: `/blog/location-intelligence-the-core-of-digital-transformation`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/mapping-and-geographic-information-systems-what-is-it`, toPath: `/blog/mapping-and-geographic-information-systems-what-is-it`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/mapping-and-geographic-information-systems-what-is-it/`, toPath: `/blog/mapping-and-geographic-information-systems-what-is-it`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/meet-bv`, toPath: `/blog/drone-data-acquisition-for-detailed-mapping-of-crucial`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/meet-bv/`, toPath: `/blog/drone-data-acquisition-for-detailed-mapping-of-crucial`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/monitoring-droughts-in-the-netherlands`, toPath: `/blog/monitoring-droughts-in-the-netherlands`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/monitoring-droughts-in-the-netherlands/`, toPath: `/blog/monitoring-droughts-in-the-netherlands`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/news`, toPath: `/blogs`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/news/`, toPath: `/blogs`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/notification`, toPath: `/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/notification/`, toPath: `/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/preserving-the-dutch-grasslands`, toPath: `/blog/preserving-the-dutch-grasslands`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/preserving-the-dutch-grasslands/`, toPath: `/blog/preserving-the-dutch-grasslands`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/privacy-policy`, toPath: `/privacy`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/privacy-policy/`, toPath: `/privacy`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/privacypolicy`, toPath: `/privacy`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/privacypolicy/`, toPath: `/privacy`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/protecting-the-earths-green-cover`, toPath: `/blog/protecting-the-earths-green-cover`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/protecting-the-earths-green-cover/`, toPath: `/blog/protecting-the-earths-green-cover`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/satellite-radar-data-in-flood-monitoring`, toPath: `/blog/satellite-radar-data-in-flood-monitoring`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/satellite-radar-data-in-flood-monitoring/`, toPath: `/blog/satellite-radar-data-in-flood-monitoring`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/satellite-radar-data-to-monitor-land-subsidence`, toPath: `/blog/satellite-radar-data-to-monitor-land-subsidence`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/satellite-radar-data-to-monitor-land-subsidence/`, toPath: `/blog/satellite-radar-data-to-monitor-land-subsidence`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/seamless-delivery-of-remote-sensing-analytics-to-clients`, toPath: `/blog/seamless-delivery-of-remote-sensing-analytics-to-clients`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/seamless-delivery-of-remote-sensing-analytics-to-clients/`, toPath: `/blog/seamless-delivery-of-remote-sensing-analytics-to-clients`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/selling-spatial-data`, toPath: `/blog/selling-spatial-data`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/selling-spatial-data/`, toPath: `/blog/selling-spatial-data`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/sharing-field-status-for-higher-sugarcane-yields`, toPath: `/blog/sharing-field-status-for-higher-sugarcane-yields`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/sharing-field-status-for-higher-sugarcane-yields/`, toPath: `/blog/sharing-field-status-for-higher-sugarcane-yields`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/spatial-and-temporal-gis-analysis-using-change-detection`, toPath: `/blog/spatial-and-temporal-gis-analysis-using-change-detection`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/spatial-and-temporal-gis-analysis-using-change-detection/`, toPath: `/blog/spatial-and-temporal-gis-analysis-using-change-detection`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/spatial-data`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/spatial-data/`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/st-and-ellipsis-drive-form-strategic-partnership`, toPath: `/blog/st-and-ellipsis-drive-form-strategic-partnership`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/st-and-ellipsis-drive-form-strategic-partnership/`, toPath: `/blog/st-and-ellipsis-drive-form-strategic-partnership`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/terms-of-service`, toPath: `/terms`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/terms-of-service/`, toPath: `/terms`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/termsofservice`, toPath: `/terms`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/termsofservice/`, toPath: `/terms`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/terms-of-use`, toPath: `/terms`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/terms-of-use/`, toPath: `/terms`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/termsofuse`, toPath: `/terms`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/termsofuse/`, toPath: `/terms`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/thank-you`, toPath: `/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/thank-you/`, toPath: `/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/thankyou`, toPath: `/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/thankyou/`, toPath: `/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/the-a-to-zs-of-remote-sensing`, toPath: `/blog/the-a-to-zs-of-remote-sensing`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/the-a-to-zs-of-remote-sensing/`, toPath: `/blog/the-a-to-zs-of-remote-sensing`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/the-genesis-of-ellipsis-drive`, toPath: `/blog/the-genesis-of-ellipsis-drive`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/the-genesis-of-ellipsis-drive/`, toPath: `/blog/the-genesis-of-ellipsis-drive`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/the-impact-of-gis-technology-on-disaster-response`, toPath: `/blog/the-impact-of-gis-technology-on-disaster-response`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/the-impact-of-gis-technology-on-disaster-response/`, toPath: `/blog/the-impact-of-gis-technology-on-disaster-response`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/blog/how-do-businesses-use-gis-in-marketing`, toPath: `/blog/how-do-businesses-use-gis-in-marketing`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/blog/how-do-businesses-use-gis-in-marketing/`, toPath: `/blog/how-do-businesses-use-gis-in-marketing`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/solution/off-the-shelf-back-end-and-front-end-capabilities/`, toPath: `/solution/off-the-shelf-back-end-and-front-end-capabilities`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/the-sustainable-way-of-doing-business`, toPath: `/blog/the-sustainable-way-of-doing-business`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/the-sustainable-way-of-doing-business/`, toPath: `/blog/the-sustainable-way-of-doing-business`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/top-applications-of-gis`, toPath: `/blog/top-applications-of-gis`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/top-applications-of-gis/`, toPath: `/blog/top-applications-of-gis`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/tour`, toPath: `/`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/tour/`, toPath: `/`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/uavs-and-gis-what-you-need-to-know`, toPath: `/blog/uavs-and-gis-what-you-need-to-know`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/uavs-and-gis-what-you-need-to-know/`, toPath: `/blog/uavs-and-gis-what-you-need-to-know`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/using-remote-sensing-data-to-create-actionable-insights`, toPath: `/blog/using-remote-sensing-data-to-create-actionable-insights`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/using-remote-sensing-data-to-create-actionable-insights/`, toPath: `/blog/using-remote-sensing-data-to-create-actionable-insights`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/what-are-the-uses-of-3d-gis`, toPath: `/blog/what-are-the-uses-of-3d-gis`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/what-are-the-uses-of-3d-gis/`, toPath: `/blog/what-are-the-uses-of-3d-gis`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/why-cartography-still-matters`, toPath: `/blog/why-cartography-still-matters`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/why-cartography-still-matters/`, toPath: `/blog/why-cartography-still-matters`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/category`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/category/`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/category/gis`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/category/gis/`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/category/use-case`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/category/use-case/`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/category/usecase`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/category/usecase/`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/category/uncategorized`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/category/uncategorized/`, toPath: `/solutions`, redirectInBrowser: true, isPermanent: true });

  createRedirect({ fromPath: `/community-library`, toPath: `https://app.ellipsis-drive.com/library`, redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: `/community-library/`, toPath: `https://app.ellipsis-drive.com/library`, redirectInBrowser: true, isPermanent: true });

}