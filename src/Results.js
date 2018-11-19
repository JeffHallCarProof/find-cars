import React from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ScrollView
  } from 'react-native';
import _ from 'lodash';
import Loader from 'react-loader-spinner'
import { Line} from 'rc-progress';
import nextBtn from './assets/NextBTN@1x.svg'
import prevBtn from './assets/PrevBTN@1x.svg'
import nextBtnD from './assets/NextBTND@1x.svg'
import prevBtnD from './assets/PrevBTND@1x.svg'
import { Link } from 'react-router-dom';
import Modal from './Modal.js';
import logo1_1 from './assets/first.1.svg';
import logo1_2 from './assets/second.1.svg';
import logo1_3 from './assets/third.1.svg';
import logo2_1 from './assets/first.2.svg';
import logo2_2 from './assets/second.2.svg';
import logo2_3 from './assets/third.2.svg';
import logo3_1 from './assets/first.3.svg';
import logo3_2 from './assets/second.3.svg';
import logo3_3 from './assets/third.3.svg';
import logo4_1 from './assets/first.4.svg';
import logo4_2 from './assets/second.4.svg';
import logo4_3 from './assets/third.4.svg';
import logo5_1 from './assets/first.5.svg';
import logo5_2 from './assets/second.5.svg';
import logo5_3 from './assets/third.5.svg';
import logo6_1 from './assets/first.6.svg';
import logo6_2 from './assets/second.6.svg';
import logo6_3 from './assets/third.6.svg';
import logo7_1 from './assets/first.7.svg';
import logo7_2 from './assets/second.7.svg';
import logo7_3 from './assets/third.7.svg';
import logo8_1 from './assets/first.8.svg';
import logo8_2 from './assets/second.8.svg';
import logo8_3 from './assets/third.8.svg';
import './App.css';
import { TweenLite, Expo} from 'gsap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import sedan from './assets/BodyType/SedanBox@1x.svg'
import sedanH from './assets/BodyType/SedanBox@1xH.svg'
import suv from './assets/BodyType/SUVBox@1x.svg'
import suvH from './assets/BodyType/SUVBox@1xH.svg'
import cab from './assets/BodyType/CabBox@1x.svg'
import cabH from './assets/BodyType/CabBox@1xH.svg'
import hatchback from './assets/BodyType/HatchbackBox@1x.svg'
import hatchbackH from './assets/BodyType/HatchbackBox@1xH.svg'
import coupe from './assets/BodyType/CoupeBox@1x.svg'
import coupeH from './assets/BodyType/CoupeBox@1xH.svg'
import convertible from './assets/BodyType/ConvertibleBox@1x.svg'
import convertibleH from './assets/BodyType/ConvertibleBox@1xH.svg'
import wagon from './assets/BodyType/WagonBox@1x.svg'
import wagonH from './assets/BodyType/WagonBox@1xH.svg'
import minivan from './assets/BodyType/MinivanBox@1x.svg'
import minivanH from './assets/BodyType/MinivanBox@1xH.svg'
import diesel from './assets/BodyType/DieselBox@1x.svg'
import dieselH from './assets/BodyType/DieselBox@1xH.svg'

  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  //results screen
  class Results extends React.Component {

    //This function allows the lower and upper bounds of the budget slider to be read and stored in variables
    onSliderChange = (value) => {
      this.setState({lowerBound: value[0], upperBound: value[1]})
    }

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    circles = {
     c1:[logo1_1,logo1_2,logo1_3],
     c2:[logo2_1,logo2_2,logo2_3],
     c3:[logo3_1,logo3_2,logo3_3],
     c4:[logo4_1,logo4_2,logo4_3],
     c5:[logo5_1,logo5_2,logo5_3],
     c6:[logo6_1,logo6_2,logo6_3],
     c7:[logo7_1,logo7_2,logo7_3],
     c8:[logo8_1,logo8_2,logo8_3],
   }
   colors = {
    c1:'#B3B3B3',
    c2:'#B3B3B3',
    c3:'#B3B3B3',
    c4:'#B3B3B3',
    c5:'#B3B3B3',
  }

    state = {
      eventId: this.props.match.params.eventId,
      eventIdTemp: 0,
      
      lowerBound: this.props.match.params.lowerBound,
      upperBound: this.props.match.params.upperBound,
      lowerBT: 0,
      upperBT: 0,
      classId: this.props.match.params.classId,
      classIdTemp: '',
      numArray: this.props.match.params.numArray,
      visibleModal: null, //Modal
      loading: true,
      responseJson: [],
      count: 0,
      disN: false,
      prev: prevBtnD,
      next: nextBtn,
      first: true,
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      e1: false,
      e2: false,
      e3: false,
      e4: false,
      e5: false,
      e6: false,
      clicks: [1,1,1,1,1,1,1,1],
      clicksTemp: [1,1,1,1,1,1,1,1],
      cM:0,
      id: ['Al1','Al2','Al3','Al4','Al5','Al6','Al7','Al8','Alc'],
      pColor: [this.circles.c1,this.circles.c2,this.circles.c3,this.circles.c4,this.circles.c5,this.circles.c6,this.circles.c7,this.circles.c8],
      iP: [0,0,0,0,0,0,0,0],
      iPTemp: [0,0,0,0,0,0,0,0],
      i: [0,1,2,3,4,5,6,7],
      toNext: false,
      isHidden: true,
      min: 0,
      max: 100000,
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c6: false,
      c7: false,
      c8: false,
      c9: false,
    pref: false,
    pFirstClick: true,
    rFirstClick: true,
    newNumArray: '',
    ci: [false,false,false,false,false,false,false,false],
    called: 0,
    data: [],
    loadingText: 'Finding your car...',
    event: 'event1',
    }
    simulateClick =(e) =>{
      if(this.state.pFirstClick === true){
         e.click()
      }
    }
    //////////////////////////////////////Modal start
    toggleModal1 = () => {
      this.setState({eventIdTemp:this.state.eventId,upperBT:this.state.upperBound,lowerBT:this.state.lowerBound,classIdTemp:this.state.classId,clicks:this.state.clicksTemp})
      if(this.state.eventId === 1) {      
        this.setState({e1: true, e2: false, e3: false, e4: false, e5: false, e6: false})
        this.state.event ='event1'        
      } else if(this.state.eventId === 2) {       
        this.setState({e1: false, e2: true, e3: false, e4: false, e5: false, e6: false})
        this.state.event ='event2'       
      } else if(this.state.eventId === 3) {
        this.setState({e1: false, e2: false, e3: true, e4: false, e5: false, e6: false}) 
        this.state.event ='event3'      
      } else if(this.state.eventId === 4) {
        this.setState({e1: false, e2: false, e3: false, e4: true, e5: false, e6: false})  
        this.state.event ='event4'     
      } else if(this.state.eventId === 5) {
        this.setState({e1: false, e2: false, e3: false, e4: false, e5: true, e6: false})   
        this.state.event ='event5'    
      } else if(this.state.eventId === 6){
        this.setState({e1: false, e2: false, e3: false, e4: false, e5: false, e6: true}) 
        this.state.event ='event6'      
      }
      if(this.state.modal1 === true){
        this.setState({
           loading: true
        });
      }
      this.setState({
        modal1: !this.state.modal1
      });

      
    }
    toggleModal2 = () => {
      this.setState({eventIdTemp:this.state.eventId,upperBT:this.state.upperBound,lowerBT:this.state.lowerBound,classIdTemp:this.state.classId,clicks:this.state.clicksTemp})
      if(this.state.modal2 === true){
        this.setState({
           loading: true
        });
      }
      this.setState({
        modal2: !this.state.modal2
      });
    }
    toggleModal3 = () => {
      if(this.state.classId === 'Sedan'){
        this.setState({c1: true,c2: false,c3: false,c4: false,c5: false,c6: false,c7: false,c8: false,c9: false,})
      }else if(this.state.classId === 'SUV'){
        this.setState({c1: false,c2: true,c3: false,c4: false,c5: false,c6: false,c7: false,c8: false,c9: false,})
      }else if(this.state.classId === 'Cab'){
        this.setState({c1: false,c2: false,c3: true,c4: false,c5: false,c6: false,c7: false,c8: false,c9: false,})
      }else if(this.state.classId === 'Hatchback'){
        this.setState({c1: false,c2: false,c3: false,c4: true,c5: false,c6: false,c7: false,c8: false,c9: false,})
      }else if(this.state.classId === 'Coupe'){
        this.setState({c1: false,c2: false,c3: false,c4: false,c5: true,c6: false,c7: false,c8: false,c9: false,})
      }else if(this.state.classId === 'Convertible'){
        this.setState({c1: false,c2: false,c3: false,c4: false,c5: false,c6: true,c7: false,c8: false,c9: false,})
      }else if(this.state.classId === 'Wagon'){
        this.setState({c1: false,c2: false,c3: false,c4: false,c5: false,c6: false,c7: true,c8: false,c9: false,})
      }else if(this.state.classId === 'Minivan'){
        this.setState({c1: false,c2: false,c3: false,c4: false,c5: false,c6: false,c7: false,c8: true,c9: false,})
      }else if(this.state.classId === 'Diesel'){
        this.setState({c1: false,c2: false,c3: false,c4: false,c5: false,c6: false,c7: false,c8: false,c9: true,})
      }
      this.setState({eventIdTemp:this.state.eventId,upperBT:this.state.upperBound,lowerBT:this.state.lowerBound,classIdTemp:this.state.classId,clicks:this.state.clicksTemp})
      if(this.state.modal3 === true){
        this.setState({
           loading: true
        });
      }
      this.setState({
        modal3: !this.state.modal3
      });
    }

    toggleModal4 = () => {
      this.setState({eventIdTemp:this.state.eventId,upperBT:this.state.upperBound,lowerBT:this.state.lowerBound,classIdTemp:this.state.classId})
      this.state.clicksTemp=this.state.clicks
      this.state.iPTemp=this.state.iP
      if(this.state.modal4 === true){
        this.state.loading = true
      }
      this.setState({modal4: !this.state.modal4});
      this.state.pref = !this.state.pref



    }
    toggleModalX = () => {
      this.setState({modal1: false, modal2: false, modal3: false, modal4: false,pref: false})
      this.setState({eventId: this.state.eventIdTemp, lowerBound: this.state.lowerBT, upperBound: this.state.upperBT, classId: this.state.classIdTemp})
      this.state.clicks = this.state.clicksTemp
      this.state.iP=this.state.iPTemp
    }
    //////////////////////////////////////Modal end

    //api call
    async getHelloW() {

    
      // sample Url    https://productlab.carfax.ca/findmycar/multi/eventid/class/MAX/MIN/PREFERENCES/cargospace
      this.setState({loading: true});
      
      let newNumArray = this.state.numArray[0].toString()+this.state.numArray[1].toString()+this.state.numArray[2].toString()+this.state.numArray[3].toString()+this.state.numArray[4].toString()+this.state.numArray[5].toString()+this.state.numArray[6].toString()+this.state.numArray[7].toString();
      if(this.state.rFirstClick == true){
        let click = this.state.clicks.slice();
        click[0] = parseInt(this.state.numArray[0],10)
        click[1] = parseInt(this.state.numArray[1],10)
        click[2] = parseInt(this.state.numArray[2],10)
        click[3] = parseInt(this.state.numArray[3],10)
        click[4] = parseInt(this.state.numArray[4],10)
        click[5] = parseInt(this.state.numArray[5],10)
        click[6] = parseInt(this.state.numArray[6],10)
        click[7] = parseInt(this.state.numArray[7],10)
        this.setState({clicks: click})

        this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})

        this.setState({rFirstClick: false})
        }else{
      let click = this.state.clicks.slice();
      click[0] = parseInt(this.state.clicks[0],10)
      click[1] = parseInt(this.state.clicks[1],10)
      click[2] = parseInt(this.state.clicks[2],10)
      click[3] = parseInt(this.state.clicks[3],10)
      click[4] = parseInt(this.state.clicks[4],10)
      click[5] = parseInt(this.state.clicks[5],10)
      click[6] = parseInt(this.state.clicks[6],10)
      click[7] = parseInt(this.state.clicks[7],10)

      this.setState({clicks: click,});
      newNumArray = this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()

      
     }
     let newArray = newNumArray;
     let ip = this.state.iP.slice();
     for (let index = 0; index < 8; index++) {
     if(newArray[index] == 1){
       ip[index]=0
     }else if (newArray[index] == 2){
       ip[index]=1
     }else{
       ip[index]=2
     }
   }
   if(this.state.upperBound==100000){
    this.state.upperBound =10000000
    }
   this.setState(this.state.iP= ip)
   if(this.state.eventId == 1) {      
    this.setState({event: 'event1'}) 
  } else if(this.state.eventId == 2) {       
    this.setState({event: 'event2'})       
  } else if(this.state.eventId == 3) {
    this.setState({event: 'event3'})     
  } else if(this.state.eventId == 4) { 
    this.setState({event: 'event4'}) 
  } else if(this.state.eventId == 5) {  
    this.setState({event: 'event5'}) 
  } else if(this.state.eventId == 6){
    this.setState({event: 'event6'}) 
    
  }
     const url = "https://productlab.carfax.ca/findmycar/multi/"+this.state.eventId+"/"+this.state.classId+"/"+this.state.upperBound+"/"+this.state.lowerBound+"/"+newArray+"/"+0;
      try{
      const res = await fetch(url,console.log(url),{
        method:'GET',
        mode: 'no-cors',
        headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              "type": "select",
              "args": {
                "table": "author",
                "columns": [
                  "Budget",
                  "BuildQualityRating",
                  "ComfortRating",
                  "ExteriorDesignRating",
                  "FuelEconomyRating",
                  "FunToDriveRating",
                  "InteriorDesignRating ",
                  "Make",
                  "Model",
                  "PerformanceRating",
                  "ReliabilityRating",
                  "Score",
                  "URL"
    
                ]
            }
            }),
        })
        const rJson = await res.json();
        const ETC1 = await this.setState({responseJson: rJson});
        const ETC2 = await this.setState({pFirstClick: true, first: true, prev: prevBtnD, next: nextBtn,});
        const ETC3 = await this.setState({called: 0})
        this.colorChange();
        this.getCarImg();
      }catch(err){
        return console.error(err);
      }

      
    };

    async getCarImg(){
      for (let i = 0; i < 5; i++) {
        let tempMake = 'Ford'
        let tempModel = 'Fusion'
        let tempYear = 2014;
        let url1 = 'https://api.fuelapi.com/v1/json/vehicles/?year='+tempYear+'&model='+tempModel+'&make='+tempMake+'&api_key=daefd14b-9f2b-4968-9e4d-9d4bb4af01d1'
        try{
          const res = await fetch(url1,console.log(),{
            method:'GET',
            mode: 'no-cors',
            headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
          }) 
        const rJson1 = await res.json();
        const ETC4 = await this.setState({data: rJson1});
        
        }catch(err){
            return console.error(err);
          }
        let fuelVehicleID = this.state.data[0].id 
        let url2 = 'https://api.fuelapi.com/v1/json/vehicle/'+fuelVehicleID+'/?api_key=daefd14b-9f2b-4968-9e4d-9d4bb4af01d1&productID=1&shotCode=037'
        try{
          const res = await fetch(url2,console.log(),{
            method:'GET',
            mode: 'no-cors',
            headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
          }) 
        const rJson2 = await res.json();
        this.state.responseJson[i].URL = rJson2.products[0].productFormats[0].assets[0].url
        this.setState({loading: false,loadingText: 'Updating...',count: 0,})
        }catch(err){
            return console.error(err);
          }
     }
    }
    //go back function
    _go =_.throttle(() =>{ 
      if (this.state.called == 0){
        this.state.called += 1
        this.getHelloW()
      }else{

      }
      
            
          },2000,{leading:true, trailing:false});

    _countP = () =>{
      if(this.state.count ===0){
        this.setState({prev: prevBtnD})
        this.setState({first: true})
      }else if(this.state.count ===1){
      this.setState({count: this.state.count-1, prev: prevBtnD, next: nextBtn})
      this.setState({first: true})
      }else{
      this.setState({count: this.state.count-1, prev: prevBtn, next: nextBtn})
      this.setState({first: false})
      }
      this.colorChange();
    }
    _countN = () =>{
      if(this.state.count ===4){
        this.setState({next: nextBtnD})
        this.setState({first: false})
      }else if(this.state.count ===3){
      this.setState({count: this.state.count+1, prev: prevBtn, next: nextBtnD})
      this.setState({first: false})
      }else{
      this.setState({count: this.state.count+1, prev: prevBtn, next: nextBtn})
      this.setState({first: false})
      }
      this.colorChange();
    }
    circleSize = () => {
      let ip = this.state.iP.slice();
      for (let index = 0; index < 8; index++) {

        
        if(this.state.clicks[index] == 1){
          ip[index]=0
          TweenLite.to("#"+this.state.id[index],1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        }else if (this.state.clicks[index] == 2){
          ip[index]=1
          TweenLite.to("#"+this.state.id[index],1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        }else if(this.state.clicks[index] == 3){
          ip[index]=2
          TweenLite.to("#"+this.state.id[index],1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        }else{
          console.log('error')
        }

      }
      
    }
    colorChange = () =>{
      let tempColor = this.state.ci.slice();
      for (let i = 0; i < 5; i++) {
        for (let ii = 0; ii < 8; ii++) {
          if(this.state.responseJson[i].Ratings_Pref[ii] == 3){
            tempColor[ii]=true
          }else if(this.state.responseJson[i].Ratings_Pref[ii] == 2){
            tempColor[ii]=true
          }else{
            tempColor[ii]=false
          }
        this.state.ci[ii]=tempColor[ii]
        }
        
      } 
    }
    render() {
      var min = this.state.min
      var max = this.state.max
      let click = this.state.clicks.slice();
let i0 = this.state.pColor.slice();
let ip = this.state.iP.slice();


//Comfort Al1
const circleClick0 = (id,cl) => {
  if(this.state.clicks[cl]===1)
  {
    TweenLite.to("#"+id, 1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
    TweenLite.to("#Al8", 1,{ease: Expo.easeOut,y:-10})
    TweenLite.to("#Al3", 1,{ease: Expo.easeOut,x:-10})
    click[cl]=2
    ip[cl]=1
  }
  else if(this.state.clicks[cl]===2)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
    TweenLite.to("#Al8",1,{ease: Expo.easeOut,y:-15})
    TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-15})
    click[cl]=3
    ip[cl]=2
  }
  else
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:0,y:0})
    TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:0,y:0})
    click[cl]=1
    ip[cl]=0
  }
  this.setState({clicks: click,pColor: i0, iP: ip });
  this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})
}
//InteriorDesign Al2
const circleClick1 = (id,cl) => {;
  if(this.state.clicks[cl]===1)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
    TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:10})
    TweenLite.to("#Al5",1,{ease: Expo.easeOut,y:10})
    click[cl]=2
    ip[cl]=1
  }
  else if(this.state.clicks[cl]===2)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
    TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:15})
    TweenLite.to("#Al5",1,{ease: Expo.easeOut,y:15})
    click[cl]=3
    ip[cl]=2
  }
  else
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:0 ,y:0})
    TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:0 ,y:0})
    click[cl]=1
    ip[cl]=0
  }
  this.setState({clicks: click,pColor: i0, iP: ip });
  this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})
}
//ExteriorDesign Al3
const circleClick2 = (id,cl) => {
  if(this.state.clicks[cl]===1)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
    TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-10, y:-10})
    TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-10, y:10})
    click[cl]=2
    ip[cl]=1
  }
  else if(this.state.clicks[cl]===2)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
    TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-15, y:-15})
    TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-15, y:15})
    click[cl]=3
    ip[cl]=2
  }
  else
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:0, y:0})
    TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:0 ,y:0})
    click[cl]=1
    ip[cl]=0
  }
  this.setState({clicks: click,pColor: i0, iP: ip });
  this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})
} 
//BuildQuality Al4
//All animation must respect this set of animations
const circleClick3 = (id,cl) => {
  if(this.state.clicks[cl]===1)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
    click[cl]=2
    ip[cl]=1
  }
  else if(this.state.clicks[cl]===2)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
    click[cl]=3
    ip[cl]=2
  }
  else
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    click[cl]=1
    ip[cl]=0
  }
  this.setState({clicks: click,pColor: i0, iP: ip });
  this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})
} 
//Performance Al5    
const circleClick4 = (id,cl) => {
  if(this.state.clicks[cl]===1)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
    TweenLite.to("#Al2",1,{ease: Expo.easeOut,y:10})
    TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-10})
    click[cl]=2
    ip[cl]=1
  }
  else if(this.state.clicks[cl]===2)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
    TweenLite.to("#Al2",1,{ease: Expo.easeOut,y:15})
    TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-15})
    click[cl]=3
    ip[cl]=2
  }
  else
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:0 ,y:0})
    TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:0 ,y:0})
    click[cl]=1
    ip[cl]=0
  }
  this.setState({clicks: click,pColor: i0, iP: ip });
  this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})
} 
//FunToDrive Al6
const circleClick5 = (id,cl) => {
  if(this.state.clicks[cl]===1)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
    TweenLite.to("#Al8",1,{ease: Expo.easeOut,y:-10})
    TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:10})
    click[cl]=2
    ip[cl]=1
  }
  else if(this.state.clicks[cl]===2)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
    TweenLite.to("#Al8",1,{ease: Expo.easeOut,y:-15})
    TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:15})
    click[cl]=3
    ip[cl]=2
  }
  else
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:0 ,y:0})
    TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:0 ,y:0})
    click[cl]=1
    ip[cl]=0
  }
  this.setState({clicks: click,pColor: i0, iP: ip });
  this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})
} 
//FuelEconomy Al7
const circleClick6 = (id,cl) => {
  if(this.state.clicks[cl]===1)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
    TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:10, y:-10})
    TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:10, y:10})
    click[cl]=2
    ip[cl]=1
  }
  else if(this.state.clicks[cl]===2)
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
    TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:15, y:-15})
    TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:15, y:15})
    click[cl]=3
    ip[cl]=2
  }
  else
  {
    TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:0,y:0})
    TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:0 ,y:0})
    click[cl]=1
    ip[cl]=0
  }
  this.setState({clicks: click,pColor: i0, iP: ip });
  this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})
}
//Reliability Al8
const circleClick7 = (id,cl) => {
  
    if(this.state.clicks[cl]===1)
    {
      TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
      TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-10, y:-10})
      TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:10, y:-10})
      click[cl]=2
      ip[cl]=1
    }
    else if(this.state.clicks[cl]===2)
    {
      TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
      TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-15, y:-15})
      TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:15, y:-15})
      click[cl]=3
      ip[cl]=2
    }
    else
    {
      TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
      TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:0, y:0})
      TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:0 ,y:0})
      click[cl]=1
      ip[cl]=0
    
  }
  

  
  this.setState({clicks: click,pColor: i0, iP: ip });
  this.setState({numArray: this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString()})
} 

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
{ this.state.loading ? this._go() : null}
if(this.state.loading === false){
        var i = this.state.count
        this.colorChange()
      return (
            
        <View style={styles.container}>

        <View style={{backgroundColor: '#FFFFFF', height: 60, justifyContent: 'center', borderColor: '#D8D8D8'}}>
          <View style={{position: 'absolute', right: 15}}>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              <TouchableHighlight underlayColor={'#FFFFFF'}>
                <Image source={require('./assets/X-Close.png')} style={{width: 14, height: 14}}></Image>
              </TouchableHighlight>
            </Link>
          </View>
          <View style={{alignSelf: 'center'}}><Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image></View>

        </View>
        <View style={{flexDirection:'row',boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
          <View
              underlayColor={'#FAFAFA'}
              style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#FFFFFF',width: "25%",height: 50,borderWidth:0.5,borderColor: '#D8D8D8'}}
              onClick={this.toggleModal1}
            >
            <Text style={{color:'#989898', fontSize:16,lineHeight: 19,textAlign: 'center',fontFamily: 'Roboto'}}> Events</Text>
            <Text style={{color:'#000000', fontSize:12,lineHeight: 22,textAlign: 'center',fontFamily: 'Roboto'}}>{this.state.event}</Text>
          </View>
          <View
              underlayColor={'#FAFAFA'}
              style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#FFFFFF',width: "25%",height: 50,borderWidth:0.5,borderColor: '#D8D8D8'}}
              onClick={this.toggleModal2}
            >
            <Text style={{color:'#989898', fontSize:16,lineHeight: 19,textAlign: 'center',fontFamily: 'Roboto'}}> Budget </Text>
            { this.state.upperBound>=100000? 
            <Text style={{color:'#000000', fontSize:12,lineHeight: 22,textAlign: 'center',fontFamily: 'Roboto'}}>${this.state.lowerBound} - MAX</Text>
            :<Text style={{color:'#000000', fontSize:12,lineHeight: 22,textAlign: 'center',fontFamily: 'Roboto'}}>${this.state.lowerBound} - ${this.state.upperBound}</Text> }
          </View>
          <View
              underlayColor={'#FAFAFA'}
              style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#FFFFFF',width: "25%",height: 50,borderWidth:0.5,borderColor: '#D8D8D8'}}
              onClick={this.toggleModal3}
            >
            <Text style={{color:'#989898', fontSize:16,lineHeight: 19,textAlign: 'center',fontFamily: 'Roboto'}}> Body </Text>
            <Text style={{color:'#000000', fontSize:12,lineHeight: 22,textAlign: 'center',fontFamily: 'Roboto'}}> {this.state.classId}</Text>
          </View>
          <View
              underlayColor={'#FAFAFA'}
              style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#FFFFFF',width: "25%",height: 50,borderWidth:0.5,borderColor: '#D8D8D8'}}
              onClick={this.toggleModal4}
            >
            <Text style={{color:'#989898', fontSize:16,lineHeight: 19,textAlign: 'center',fontFamily: 'Roboto'}}>Preferences</Text>
            <Text numberOfLines={1}ellipsizeMode={'tail'} style={{color:'#000000',paddingLeft: 5, fontSize:12,lineHeight: 22,textAlign: 'left',fontFamily: 'Roboto'}}>{this.state.responseJson[i].Ratings[0]},{this.state.responseJson[i].Ratings[1]},{this.state.responseJson[i].Ratings[2]}</Text>
          </View>
        </View>
        <View style={styles.containerAll}>


        <View style={{ flexDirection: 'row', height: '50%', width: '100%', paddingHorizontal: 5,justifyContent: "space-between"}}>

          <img src={this.state.prev} alt={'didnt load'} onClick={() => this._countP()} />

          <View style={{  height: '100%', width: '75%',justifyContent: "center",borderWidth: 1,borderColor: '#BFBFBF',}}>

            <Image source={ this.state.responseJson[i].URL} style={{height: '60%',width: '100%',paddingBottom: 5 }}/>
           
            <Text style={{fontSize: 16, lineHeight: 36, textAlign: 'center',height: '17%',width: '100%',fontFamily: 'Roboto',fontWeight: 'bold' }}>{this.state.responseJson[i].Make} {this.state.responseJson[i].Model} {this.state.responseJson[i].Body_Type}</Text>
            <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 15, textAlign: 'center',height: '11%',width: '100%',fontFamily: 'Roboto',color: '#1294EF'}}>Budget: {this.state.responseJson[i].Budget}</Text>
            <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 15, textAlign: 'center',height: '12%',width: '100%',fontFamily: 'Roboto',}}>Rating out of 5</Text>
          </View>
          <img src={this.state.next} alt={'didnt load'} onClick={() => this._countN()} style={[styles.buttonA, this.state.disN && styles.buttonD, !this.state.disN]}/>
          { this.state.first ? 
            <div style={{backgroundColor: '#1294EF', alignSelf: 'center', width: '72.55%',height: '0.8%', textAlign: 'center',position: "absolute", top: '0%',left: '13.72%',justifyContent: 'center',alignContent: 'center' }}>   
              <div style={{backgroundColor: '#1294EF', alignSelf: 'center', borderRadius: 4,width: '10%',height: '0.4%', textAlign: 'center',position: "absolute", top: '0%',justifyContent: 'center',alignContent: 'center' }}>   
                <p></p>
              </div>
            </div>
          : null }
          { this.state.first ? 
           <div style={{backgroundColor: '#1294EF', alignSelf: 'center', borderRadius: 4,width: 107, textAlign: 'center',position: "absolute", top: '-4%',left: '35%',justifyContent: 'center',alignContent: 'center' }}>   
            <Text style={styles.rtext}>Recommended</Text>
          </div>
          : null } 
          </View>
  
          <Text style={{color:'#000000', fontSize:14,fontFamily: 'Roboto', fontWeight: 'bold', alignSelf: 'baseline', paddingTop: 30,paddingLeft: 10}}>Your Perosnal Preferences</Text>
        <ScrollView style={{paddingTop: 20,paddingHorizontal: 5}}>
        <View style={styles.containerData}>
          { this.state.ci[0] ? 
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[0]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
                percent={(this.state.responseJson[i].Ratings_Attr[0])*100} />
            </View> 
            :             
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[0]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
              percent={(this.state.responseJson[i].Ratings_Attr[0])*100} />
            </View> 
            }
                      { this.state.ci[1] ? 
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[1]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
                percent={(this.state.responseJson[i].Ratings_Attr[1])*100} />
            </View> 
            :             
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[1]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
              percent={(this.state.responseJson[i].Ratings_Attr[1])*100} />
            </View> 
            }
                      { this.state.ci[2] ? 
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[2]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
                percent={(this.state.responseJson[i].Ratings_Attr[2])*100} />
            </View> 
            :             
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[2]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
              percent={(this.state.responseJson[i].Ratings_Attr[2])*100} />
            </View> 
            }
                      { this.state.ci[3] ? 
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[3]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
                percent={(this.state.responseJson[i].Ratings_Attr[3])*100} />
            </View> 
            :             
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[3]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
              percent={(this.state.responseJson[i].Ratings_Attr[3])*100} />
            </View> 
            }
                      { this.state.ci[4] ? 
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[4]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
                percent={(this.state.responseJson[i].Ratings_Attr[4])*100} />
            </View> 
            :             
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[4]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
              percent={(this.state.responseJson[i].Ratings_Attr[4])*100} />
            </View> 
            }
                      { this.state.ci[5] ? 
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[5]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
                percent={(this.state.responseJson[i].Ratings_Attr[5])*100} />
            </View> 
            :             
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[5]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
              percent={(this.state.responseJson[i].Ratings_Attr[5])*100} />
            </View> 
            }
                      { this.state.ci[6] ? 
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[6]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
                percent={(this.state.responseJson[i].Ratings_Attr[6])*100} />
            </View> 
            :             
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[6]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
              percent={(this.state.responseJson[i].Ratings_Attr[6])*100} />
            </View> 
            }
            { this.state.ci[7] ? 
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[7]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
                percent={(this.state.responseJson[i].Ratings_Attr[7])*100} />
            </View> 
            :             
            <View>
              <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[7]}</Text>
              <Line strokeWidth="2.5" trailWidth="2.5" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center',paddingTop: '8'}} 
              percent={(this.state.responseJson[i].Ratings_Attr[7])*100} />
            </View> 
            }
          </View></ScrollView>


        </View>
        
        { this.state.loading ? 
          <div className='notbubbles'>
              <View style={styles.loadingBackground }>
              <Text style={styles.ltext}>{this.state.loadingText}</Text>
                <Loader type="Oval" color="#FFFFFF" height="40" width="40" justifyContent='center' alignItems='center'/>
              </View>
          </div> : null }
          {/*Event*/}
          {/*Event*/}
          {/*Event*/}
          {/*Event*/}
          {/*Event*/}
          { this.state.modal1 ? 
            <View style={styles.modalBackground} >
              <View style={styles.modalStyle} >
                <Modal show={this.state.modal1}
                onClose={this.toggleModal1}
                onExit={this.toggleModalX}>
                {/*Must place modal content inside its own views for styling*/}

                {/*Selection*/}

                  <View style={{ alignItems: 'center',paddingBottom: 40}}>
                    <Text style={{fontSize: 24, lineHeight: 28, textAlign: 'center',fontFamily: 'Roboto',paddingTop: 40}}>
                      Reason for buying a new car
                    </Text>
                    <Text style={styles.textI}>
                      Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle. Maurizzle pellentesque get down get down et turpizzle.
                    </Text>
                    
                  </View>

                  <View style={styles.bcontainer}>
                    <TouchableHighlight
                      underlayColor={'#FFFFFF'}
                      style={styles.button3}
                      onPress={() => {this.setState({e1: true, e2: false, e3: false, e4: false, e5: false, e6: false},this._onPress(),500)}}
                    >
                      <Text style={[styles.btextX, this.state.e1 && styles.btext2]}> Event1 </Text>
                    </TouchableHighlight>
                    <View style={{paddingHorizontal: 14}}>
                      <TouchableHighlight
                        underlayColor={'#FFFFFF'}
                        style={styles.button3}
                        onPress={() => {this.setState({e1: false, e2: true, e3: false, e4: false, e5: false, e6: false},this._onPress(),500)}}
                      >
                        <Text style={[styles.btextX, this.state.e2 && styles.btext2]}> Event2 </Text>
                      </TouchableHighlight>
                    </View>
                    <TouchableHighlight
                      underlayColor={'#FFFFFF'}
                      style={styles.button3}
                      onPress={() => {this.setState({e1: false, e2: false, e3: true, e4: false, e5: false, e6: false},this._onPress(),500)}}
                    >
                      <Text style={[styles.btextX, this.state.e3 && styles.btext2]}> Event3 </Text>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.bcontainer2}>
                    <TouchableHighlight
                      underlayColor={'#FFFFFF'}
                      style={styles.button3}
                      onPress={() => {this.setState({e1: false, e2: false, e3: false, e4: true, e5: false, e6: false},this._onPress(),500)}}
                    >
                      <Text style={[styles.btextX, this.state.e4 && styles.btext2]}> Event4 </Text>
                    </TouchableHighlight>
                    <View style={{paddingHorizontal: 14}}>
                      <TouchableHighlight
                        underlayColor={'#FFFFFF'}
                        style={styles.button3}
                        onPress={() => {this.setState({e1: false, e2: false, e3: false, e4: false, e5: true, e6: false},this._onPress(),500)}}
                      >
                        <Text style={[styles.btextX, this.state.e5 && styles.btext2]}> Event5 </Text>
                      </TouchableHighlight>
                    </View>
                    <TouchableHighlight
                      underlayColor={'#FFFFFF'}
                      style={styles.button3}
                      onPress={() => {this.setState({e1: false, e2: false, e3: false, e4: false, e5: false, e6: true},this._onPress(),500)}}
                    >
                      <Text style={[styles.btextX, this.state.e6 && styles.btext2]}> Other </Text>
                    </TouchableHighlight>
                  </View>
                </Modal>
              </View>
              
          </View>
          
           : null }

           {/*Budget*/}
           {/*Budget*/}
           {/*Budget*/}
          { this.state.modal2 ? 
          <View style={styles.modalBackground} >
              <View style={styles.modalStyle} >
                <Modal show={this.state.modal2}
                onClose={this.toggleModal2}
                onExit={this.toggleModalX}>
                {/*Must place modal content inside its own views for styling*/}

                {/*Selection*/}
                  <View style={styles.bcontainer1X}>
                  <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: 24, lineHeight: 28, textAlign: 'center',fontFamily: 'Roboto',paddingTop: 40}}>What's your budget?</Text>
                    <Text style={styles.textI}>Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle. Maurizzle pellentesque get down get down et.</Text>
                  </View>
                    <View style={styles.scontainer}>
                      <View style={{height: 43, width: 161, borderColor: '#C7C7C7', borderWidth: 1, borderRadius: 4, justifyContent: 'center', backgroundColor: '#FFFFFF',}}>
                      { this.state.upperBound>=100000? 
                        <Text style={{fontSize: 18, fontWeight: '300', lineHeight: 21, textAlign: 'center'}}>{"$" + this.state.lowerBound + " - " + "MAX"}</Text>
                        :<Text style={{fontSize: 18, fontWeight: '300', lineHeight: 21, textAlign: 'center'}}>{"$" + this.state.lowerBound + " - $" + this.state.upperBound}</Text>}
                      </View>
                      <br /><br />
                        <Range min={min} max={max} defaultValue={[parseInt(this.state.lowerBound,10), parseInt(this.state.upperBound,10)]} allowCross={false} onChange={this.onSliderChange} />
                    </View>

                    <View style={{flexDirection: "row", width: '86%', justifyContent: "space-between", paddingTop: 10}}>
                      <Text style={styles.sliderLabels}>$0 </Text>
                      <Text style={styles.sliderLabels}>ANY</Text>
                    </View>

                  </View>
                </Modal>
              </View>
          </View>
           : null }
           
           {/*Body*/}
           {/*Body*/}
           {/*Body*/}
           {/*Body*/}
           { this.state.modal3 ? 
          
          <View style={styles.modalBackground} >

              <View style={styles.modalStyle} >
                <Modal show={this.state.modal3}
                onClose={this.toggleModal3}
                onExit={this.toggleModalX}>
                {/*Must place modal content inside its own views for styling*/}
                {/*Selection*/}
                    <View style={{alignItems:'center'}}>
                      <Text style={{fontSize: 24, lineHeight: 28, textAlign: 'center',fontFamily: 'Roboto',paddingTop: 40}}>Preferred body type</Text>
                    
                    
                      <Text style={styles.textI}>Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the.</Text>
                    </View>
                    <View style={styles.bcontainerX}>
                    {/*Sedan*/} 
                    { this.state.c1 ? 
                    <img src={sedanH}alt="logo" width={'25%'} height={'25%'}  onClick={() => {this.setState({c1: true, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>
                      : <img src={sedan}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: true, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>}
                    <View style={{paddingHorizontal: 5}}></View>
                    {/*SUV*/}
                    { this.state.c2 ? 
                    <img src={suvH}alt="logo" width={'25%'} height={'25%'}  onClick={() => {this.setState({c1: false, c2: true, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>
                      : <img src={suv}alt="logo" width={'25%'} height={'25%'}  onClick={() => {this.setState({c1: false, c2: true, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>}
                    <View style={{paddingHorizontal: 5}}></View>
                    {/*Cab*/}
                    { this.state.c3 ? 
                    <img src={cabH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: true, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>
                      : <img src={cab}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: true, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>}          
                    </View><View style={styles.bcontainer2X}>
                    {/*HatchBack*/}
                    { this.state.c4 ? 
                    <img src={hatchbackH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: true, c5: false, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>
                      : <img src={hatchback}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: true, c5: false, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>}               
                    <View style={{paddingHorizontal: 5}}></View>
                    {/*Coupe*/}
                    { this.state.c5 ? 
                    <img src={coupeH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: true, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>
                      : <img src={coupe}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: true, c6: false,c7: false, c8: false, c9: false}),this._onPress2()}}/>}
                    <View style={{paddingHorizontal: 5}}></View>
                    {/*Convertible*/}
                    { this.state.c6 ? 
                    <img src={convertibleH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: true,c7: false, c8: false, c9: false}),this._onPress2()}}/>
                      : <img src={convertible}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: true,c7: false, c8: false, c9: false}),this._onPress2()}}/>}            
                      </View><View style={styles.bcontainer3X}>
                    {/*Wagon*/}
                    { this.state.c7 ? 
                    <img src={wagonH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: true, c8: false, c9: false}),this._onPress2()}}/>
                      : <img src={wagon}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: true, c8: false, c9: false}),this._onPress2()}}/>} 
                    <View style={{paddingHorizontal: 5}}></View>
                    {/*Minivan*/}
                    { this.state.c8 ? 
                    <img src={minivanH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: true, c9: false}),this._onPress2()}}/>
                      : <img src={minivan}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: true, c9: false}),this._onPress2()}}/>} 
                    <View style={{paddingHorizontal: 5}}></View>
                    {/*Diesel*/}
                    { this.state.c9 ? 
                    <img src={dieselH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: true}),this._onPress2()}}/>
                      : <img src={diesel}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: true}),this._onPress2()}}/>} 
                    </View>                  
                </Modal>
              </View>
          </View>
           : null }

          {/*Preferences*/}
          {/*Preferences*/}
          {/*Preferences*/}
          {/*Preferences*/}
          
          { this.state.modal4 ? 
            <View style={styles.modalBackground} >
              <View style={styles.modalStyle}   >
                <Modal show={this.state.modal4}
                onClose={this.toggleModal4}
                onExit={this.toggleModalX}>
                {/*Must place modal content inside its own views for styling*/}
                <View style={{alignItems:'center'}}>
                  <Text style={{fontSize: 24, lineHeight: 28, textAlign: 'center',fontFamily: 'Roboto',paddingTop: 40}}>Personal Preferences</Text>
                  <Text style={styles.textI}>1 tap means you <B>like it</B>, 2 taps means you <B>love it</B>.
Let us know what’s most important to you.</Text>
                </View>
                {/*Selection*/}
                <div className='Rbubbles' >
                  <img src={this.state.pColor[this.state.i[0]][this.state.iP[0]]}  onClick={() => circleClick0(this.state.id[0],0)} className="App-logo0" alt="logo" id={this.state.id[0]} height={'10%'}  width={'21%'}/>
                  <img src={this.state.pColor[this.state.i[1]][this.state.iP[1]]}  onClick={() => circleClick1(this.state.id[1],1)} className="App-logo1" alt="logo" id={this.state.id[1]} height={'10%'}  width={'21%'}/>
                  <img src={this.state.pColor[this.state.i[2]][this.state.iP[2]]}  onClick={() => circleClick2(this.state.id[2],2)} className="App-logo2" alt="logo" id={this.state.id[2]} height={'10%'}  width={'21%'}/>
                  <img src={this.state.pColor[this.state.i[3]][this.state.iP[3]]} onClick={() => circleClick3(this.state.id[3],3)} className="App-logo3" alt="logo" id={this.state.id[3]} height={'10%'}  width={'21%'}/>
                  <img src={this.state.pColor[this.state.i[4]][this.state.iP[4]]}  onClick={() => circleClick4(this.state.id[4],4)} className="App-logo4" alt="logo" id={this.state.id[4]} height={'10%'}  width={'21%'}/>
                  <img src={this.state.pColor[this.state.i[5]][this.state.iP[5]]}  onClick={() => circleClick5(this.state.id[5],5)} className="App-logo5" alt="logo" id={this.state.id[5]} height={'10%'}  width={'21%'}/>
                  <img src={this.state.pColor[this.state.i[6]][this.state.iP[6]]}onClick={() => circleClick6(this.state.id[6],6)} className="App-logo6" alt="logo" id={this.state.id[6]} height={'10%'}  width={'21%'}/>
                  <img src={this.state.pColor[this.state.i[7]][this.state.iP[7]]}ref={this.circleSize}  onClick={() => circleClick7(this.state.id[7],7)} className="App-logo7" alt="logo" id={this.state.id[7]} height={'10%'}  width={'21%'}/>
                
                </div>
                </Modal>
              </View>
          </View>
           : null }
               { this.state.pref ? 
               this.circleSize()
                : this.circleSize() }
        </View>

        ); //End of return
      }
      return (
            
        <View style={styles.container}>

        { this.state.loading ? 
          <div className='notbubbles'>
              <View style={styles.loadingBackground }>
              
                <Loader type="Oval" color="#FFFFFF" height="40" width="40" justifyContent='center' alignItems='center'/>
                <Text style={styles.ltext}>{this.state.loadingText}</Text>
              </View>
          </div> : null }
        </View>

        );
    } //End of render

    _onPress =_.throttle(() =>{

      if(this.state.e1 === true) {
        this.setState({eventId:1,event:'event1'})        
      } else if(this.state.e2 === true) {
        this.setState({eventId:2,event:'event2'})
      } else if(this.state.e3 === true) {
        this.setState({eventId:3,event:'event3'})
      } else if(this.state.e4 === true) {
        this.setState({eventId:4,event:'event4'})
      } else if(this.state.e5 === true) {
        this.setState({eventId:5,event:'event5'})
      } else {
        this.setState({eventId:6,event:'event6'})
      }
    },0,{leading:false, trailing:true}); //End of button function

    _onPress2 =_.throttle(() =>{

      if(this.state.c1 === true){
        this.setState({classId: 'Sedan'})
      } else if(this.state.c2 === true) {
        this.setState({classId: 'SUV'})
      } else if(this.state.c3 === true) {
        this.setState({classId: 'Cab'})
      } else if(this.state.c4 === true) {
        this.setState({classId: 'Hatchback'})
      } else if(this.state.c5 === true) {
        this.setState({classId: 'Coupe'})
      } else if(this.state.c6 === true) {
        this.setState({classId: 'Convertible'})
      } else if(this.state.c7 === true) {
        this.setState({classId: 'Wagon'})
      } else if(this.state.c8 === true) {
        this.setState({classId: 'Minivan'})
      } else if(this.state.c9 === true) {
        this.setState({classId: 'Diesel'})
      }
    },0,{leading:false, trailing:true});



} //End of class
export default Results;

//Component css
const styles = StyleSheet.create({

  container: {
    alignContent: "center",
    backgroundColor: '#FAFAFA',
    height: '100%',
  },
  containerAll: {
    alignContent: "center",
    backgroundColor: '#FAFAFA',
    paddingTop: 20,
    position: "absolute",
    top: '18%',
    right: '0%',
    left: '0%',
    bottom: '0%',
  },
  containerData: {
    alignContent: "center",
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 10,

  },
  loadingBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1294EF',
    position: "absolute",
    top: '0%',
    right: '0%',
    left: '0%',
    bottom: '0%',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20
  },
  modalStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    minWidth: '100%',
    minHeight: '100%',
    margin: '0 auto',
    padding: 10
  },
  ltext: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 20,
    paddingTop: 10
  },
  rtext: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    
  },
  btext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19
  },
  mtext: {
    color: '#000000',
    textAlign:'center',
    
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19
  },
  textI: {
    width: '90%',
    color: '#000000',
    textAlign:'center',
    fontSize: 16,
    lineHeight: 19,
    paddingTop: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1294EF',
    justifyContent: 'center',
    borderRadius: 4,
    width: 300,
    height: 60,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: 50,
    height: 50,
  },

  buttonContainer: {
    alignSelf: 'center',
    position: "absolute",
    bottom: 10,
  },

  circle: {
    width: 13,
    height: 13,
    borderRadius: 50,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    backgroundColor: '#FFFFFF'
  },

  activeNav: {
    width: 13,
    height: 13,
    borderRadius: 50,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    backgroundColor: '#1294EF'
  },

  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },

  navCircles: {
    paddingHorizontal: 4
  },
buttonA: {
  height: '100%',
  width: '50%', 
  paddingRight: 5,
  color: '#1294EF',
},
buttonD:{
  height: '100%',
  width: '50%', 
  paddingRight: 5,
  color: '#2A2A2A',
},


bcontainer: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 14,
  flexDirection: 'row',
},

bcontainer2: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},

btextX: {
  color: '#989898',
  alignItems: 'center',
  justifyContent: 'center',
},

btext2: {
  color: '#1294EF',
  alignItems: 'center',
  justifyContent: 'center',
},

btext3: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: 'bold',
  lineHeight: 19,
},

button3: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  width: 100,
  height: 100,
  borderColor: '#D8D8D8',
  borderWidth: 1,
},

button2: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1294EF',
  borderRadius: 4,
  width: 94,
  height: 43,
},

button2container: {
  position: "absolute",
  bottom: 10,
  right: 10
},

bcontainer1X: {
  alignItems: 'center',
},
scontainer: {
  alignItems: 'center',
  paddingTop: 60,
  width: '80%',
},

sliderLabel1: {
  fontSize: 14,
  textAlign: "center",
  paddingHorizontal: 16,
  lineHeight: 30,
  paddingBottom: 15,
  fontFamily: 'Roboto',
},

infoText: {
  fontSize: 24,
  fontWeight: '300',
  lineHeight: 28,
  textAlign: 'center',
  paddingTop: 45,
  paddingBottom: 15,
  fontFamily: 'Roboto',
},

sliderLabels: {
  fontSize: 16,
  lineHeight: 19,
  fontFamily: 'Roboto'
},

bcontainerX: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 40,
  paddingVertical: 10,
  flexDirection: 'row',
 },
 
 bcontainer2X: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
 },
 
 bcontainer3X: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 10,
  flexDirection: 'row',
 },
});