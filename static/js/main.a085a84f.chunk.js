(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(e,t,a){},130:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(13),r=a.n(s),o=(a(129),a(130),a(75)),l=[{id:"Cityscapes 3D",href:"https://www.cityscapes-dataset.com/",size_hours:12.5,samplingRate:17,lengthOfScenes:1.8,sensors:"2 Stereo Cameras CMOS 2 MP",benchmark:"Pixel-Level Semantic Labeling Task Instance-Level Semantic Labeling Task Panoptic Semantic Labeling Task 3D Vehicle Detection Task",dataFormat:"Annotation: json Image: png",tooling:"-",annotations:"Polygonal Annotations Dense Semantic Segmentation Instance Segmentation for Vehicle/People",licensing:"Freely available for non-commercial purposes",relatedDatasets:"-",publishDate:"02.2016",lastUpdate:"08.2020"},{id:"ApolloScape",href:"http://apolloscape.auto/",size_hours:100,frames:142906,samplingRate:30,sensors:"2 laser scanners, 4 cameras, 1 LiDAR, 1 GPS",publishDate:"07.2019"},{id:"Lyft Level5",href:"https://self-driving.lyft.com/level5/",size_hours:1118,numberOfScenes:17e4,lengthOfScenes:25,sensors:"7 cameras, 3 LiDARs, 5 RADARs",dataFormat:"zarr",publishDate:"07.2019",lastUpdate:"06.2020"},{id:"Oxford RobotCar",href:"https://robotcar-dataset.robots.ox.ac.uk/",size_storage:23150,sensors:"4 cameras, 3 LiDAR, GPS, INS",licensing:"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License",publishDate:"2016"},{id:"nuScenes",href:"https://www.nuscenes.org/",size_hours:15,frames:14e6,numberOfScenes:1e3,lengthOfScenes:20,sensors:"1 LiDAR, 5 radar, 6 camera, IMU, GPS",annotations:"3D Bounding Boxes (2 Hz)+semantic category, attributes: visibility, pose, activity, ...; semantic\n            point cloud annotations; ",licensing:"Freely available for non-commercial purposes",relatedDatasets:"nuImages",publishDate:"03.2019",lastUpdate:"07.2020"},{id:"PandaSet",href:"https://pandaset.org/",frames:48e3,numberOfScenes:100,lengthOfScenes:8,sensors:"5 wide angle cameras 1 long focus camera 1 mechanical spinning LiDAR 1 forward-facing LiDAR",annotations:"3D Bounding Boxes; Class Attributes: Activity, Visibility, Location, Pose; Point Cloud Segmentation with 37 semantic labels",licensing:"Creative Commons Attribution 4.0 International Public License",publishDate:"04.2020"},{id:"Waymo Open Motion",href:"https://waymo.com/open",size_hours:574,frames:2e7,numberOfScenes:103354,samplingRate:10,lengthOfScenes:20,sensors:"5 LiDAR 5 Cameras",licensing:"Freely available for non-commercial purposes",relatedDatasets:"Waymo Open Perception Dataset",publishDate:"03.2021"},{id:"KITTI",href:"http://www.cvlibs.net/datasets/kitti/",size_hours:6,size_storage:180,samplingRate:10,sensors:"1 GPS/IMU 1 Laserscanner 2 Grayscale Cameras 2 Color Cameras 4 Varifocal Lenses",benchmark:" stereo, optical flow, visual odometry, SLAM, 3Dobject detection and 3D object tracking",dataFormat:"zip & txt",annotations:"3D bounding boxes of 8 classes",licensing:"Creative Commons Attribution-NonCommercial-ShareAlike 3.0 License",publishDate:"03.2012",lastUpdate:"02.2021"},{id:"BDD100k",href:"https://www.bdd100k.com/",size_storage:1800,size_hours:1111,frames:12e7,numberOfScenes:1e5,samplingRate:30,lengthOfScenes:40,sensors:"Crowd-sourced, no fixed setup; camera and GPS/IMU",benchmark:"Object Detection Instance Segmentation Semantic Segmentation Drivable Area Object Tracking Segmentation Tracking",dataFormat:"Scalable Format",annotations:"Image Level Annotations (Weather, Scene Type, Day Time), Object Detection - Bounding boxes, Lane Marking, Drivable Area, fie-grained pixel level annotations",licensing:"Freely available for non-commercial purposes",publishDate:"04.2020"}],c=a(180),d=a(19),h=[{field:"id",renderCell:function(e){return Object(d.jsx)(c.a,{href:"".concat(e.getValue(e.id,"href")||""),target:"_blank",children:e.getValue(e.id,"id")||""})},headerName:"Name",width:180,type:"string"},{field:"size_hours",headerName:"Size (h)",width:.09*window.innerWidth,align:"right",type:"number"},{field:"size_storage",headerName:"Size (GB)",width:.095*window.innerWidth,align:"right",type:"number"},{field:"frames",headerName:"Frames",width:.1*window.innerWidth,align:"right",type:"number"},{field:"numberOfScenes",headerName:"# Scenes",width:.095*window.innerWidth,align:"right",type:"number"},{field:"samplingRate",headerName:"Sampling Rate",width:150,hide:!0,menu:!1,align:"right",type:"number"},{field:"lengthOfScenes",headerName:"Scene Length (sec)",width:.15*window.innerWidth,align:"right",type:"number"},{field:"sensors",headerName:"Sensors",width:210,type:"string"},{field:"benchmark",headerName:"Benchmark",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.getValue(e.id,"firstName")||""," ").concat(e.getValue(e.id,"lastName")||"")},hide:!0,type:"string"},{field:"dataFormat",headerName:"Data Format",width:150,hide:!0,type:"string"},{field:"tooling",headerName:"Tooling",width:150,hide:!0,type:"string"},{field:"annotations",headerName:"Annotations",width:200,type:"string"},{field:"licensing",headerName:"Licensing",width:150,hide:!0,type:"string"},{field:"relatedDatasets",headerName:"Related Datasets",width:150,hide:!0,type:"string"},{field:"publishDate",headerName:"Publish Date",width:150,hide:!0,type:"date"},{field:"lastUpdate",headerName:"Last Update",width:150,hide:!0,type:"date"}],m=a(95),g=a(183),p=a(102),u=a(184),b=Object(m.a)((function(){return{header:{backgroundColor:"#A8A8A8"},logo:{fontFamily:"Work Sans, sans-serif",fontWeight:600,color:"#FFFEFE",textAlign:"right",paddingLeft:"40%"}}}));function f(){var e=b(),t=e.header,a=e.logo,n=Object(d.jsx)(p.a,{variant:"h6",component:"h1",className:a,children:"Autonomous Driving Datasets"});return Object(d.jsx)("header",{children:Object(d.jsx)(u.a,{className:t,children:Object(d.jsx)(g.a,{children:n})})})}function w(){return Object(d.jsxs)("div",{style:{height:.85*window.innerHeight,width:"100%",paddingTop:"5%"},children:[Object(d.jsx)(f,{}),Object(d.jsx)(o.a,{disableColumnMenu:!0,components:{Toolbar:o.b},rows:l,columns:h,options:{columnsButton:!0,resizable:!0},resizable:!0})]})}var S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),S()}},[[137,1,2]]]);
//# sourceMappingURL=main.a085a84f.chunk.js.map