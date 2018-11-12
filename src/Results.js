import React from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
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

  //results screen
  class Results extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      overall:0,
      budget:0,
      comfort:0,
      fuelEco:0,
      safety:0,
      reliablitiy:0,
      environment:0,
      preformance:0,
      intStyle:0,
      extStyle:0,
      p1: true,
      p2: false,
      p3: false,
      offset: 0,
      i: 0,
      eventId: this.props.match.params.eventId,
      lowerBound: this.props.match.params.lowerBound,
      upperBound: this.props.match.params.upperBound,
      classId: this.props.match.params.classId,
      numArray: this.props.match.params.numArray,
      visibleModal: null, //Modal
      loading: true,
      responseJson: [],
      count: 0,
      disP: true,
      disN: false,
      prev: prevBtnD,
      next: nextBtn,
      first: true,
    }

    //////////////////////////////////////Modal start
    _renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonX}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  
    _renderModalContent = () => (
      <View style={styles.modalContent}>
        <Text>Hello!</Text>
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
      </View>
    );
    //////////////////////////////////////Modal end

    //api call
    async getHelloW() {
      // sample Url    https://productlab.carfax.ca/findmycar/multi/eventid/class/MAX/MIN/PREFERENCES/cargospace
      this.setState({loading: true});
      const url = "https://productlab.carfax.ca/findmycar/multi/"+this.state.eventId+"/"+this.state.classId+"/"+this.state.upperBound+"/"+this.state.lowerBound+"/"+this.state.numArray+"/"+0;
      
      
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
        const ETC2 = await this.setState({loading: false});
        console.log(this.state.responseJson[0])
        console.log(this.state.responseJson[1])
        console.log(this.state.responseJson[2])
        console.log(this.state.responseJson[3])
        console.log(this.state.responseJson[4])
        console.log(this.state.responseJson[0].Ratings[0])

        
      }catch(err){
        return console.error(err);
      }
    
    };
    //go back function
    _go =_.throttle(() =>{ 
      this.getHelloW()
    },8000,{leading:true, trailing:false});

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
    }

    render() {

      if(this.state.loading === true){
        this._go()
      }if(this.state.loading === false){
        var i = this.state.count
        console.log(i)
      return (
            
        <View style={styles.container}>
        
        <View style={{backgroundColor: '#FFFFFF', height: 60, boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
          <View style={{position: 'absolute', right: 15, top: 17}}>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              <TouchableHighlight underlayColor={'#FFFFFF'}>
                <Image source={require('./assets/X-Close.png')} style={{width: 16, height: 17}}></Image>
              </TouchableHighlight>
            </Link>
          </View>
          <View style={{position: 'absolute', left: 125, top: 17}}><Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image></View>
        </View>


        <View style={styles.containerAll}>
        

        <View style={{ flexDirection: 'row', height: '50%', width: '100%', paddingHorizontal: 5,justifyContent: "space-between"}}>

          <img src={this.state.prev} alt={'didnt load'} onClick={() => this._countP()} />

          <View style={{  height: '100%', width: '75%',justifyContent: "center",borderWidth: 1,borderTopWidth: 3, borderTopColor: '#1294EF',borderColor: '#BFBFBF',}}>

            <Image source={ this.state.responseJson[i].URL} style={{height: '75%',width: '100%',paddingBottom: 5 }}/>
           
            <Text style={{fontSize: 16, fontWeight: '300', lineHeight: 21, textAlign: 'center',height: '10%',width: '100%', }}>{this.state.responseJson[i].Make} {this.state.responseJson[i].Model} {this.state.responseJson[i].Body_Type}</Text>
            <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 15, textAlign: 'center',height: '7.5%',width: '100%',}}>Budget: {this.state.responseJson[i].Budget}</Text>
            <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 15, textAlign: 'center',height: '7.5%',width: '100%',}}>Rating out of 5</Text>
          </View>
          <img src={this.state.next} alt={'didnt load'} onClick={() => this._countN()} style={[styles.buttonA, this.state.disN && styles.buttonD, !this.state.disN]}/>
                  
          </View>
          
          <Text style={{color:'#000000', fontSize:14,fontFamily: 'Roboto', fontWeight: 'bold', alignSelf: 'baseline', paddingTop: 30,paddingLeft: 10}}>Your Perosnal Preferences</Text>
          <ScrollView style={{paddingTop: 20,paddingHorizontal: 5}}>
          <View style={styles.containerData}>
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[0]}</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Ratings_Attr[0])*96} />
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[1]}</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Ratings_Attr[1])*87} />
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[2]}</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Ratings_Attr[2])*99} />
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#1294EF'}}>{this.state.responseJson[i].Ratings[3]}</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#1294EF' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Ratings_Attr[3])*92} />
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[4]}</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Ratings_Attr[4])*89} />
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[5]}</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Ratings_Attr[5])*86} />
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[6]}</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Ratings_Attr[6])*97} />
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>{this.state.responseJson[i].Ratings[7]}</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Ratings_Attr[7])*94} />
            <Text style={{alignSelf: 'baseline',fontFamily: 'Roboto', color: '#B3B3B3'}}>Overall</Text>
            <Line strokeWidth="2" trailWidth="2" strokeColor='#B3B3B3' width='100%' style={{paddingBottom: 10,alignSelf:'center'}} percent={(this.state.responseJson[i].Score)*16} />
            </View></ScrollView>
          
          { this.state.first ? 
           <div style={{backgroundColor: '#1294EF', alignSelf: 'center', borderRadius: 4,width: 107, textAlign: 'center',position: "absolute", top: '1.8%' }}>   <Text style={styles.rtext}>Recommended</Text>
        </div> : null }
        </View>
        
        { this.state.loading ? 
          <div className='notbubbles'>
              <View style={styles.modalBackground }>
              <Text style={styles.ltext}>ITS LOADING</Text>
                <Loader type="Oval" color="#FFFFFF" height="40" width="40" justifyContent='center' alignItems='center'/>
              </View>
          </div> : null }
        </View>

        ); //End of return
      }
      return (
            
        <View style={styles.container}>

        { this.state.loading ? 
          <div className='notbubbles'>
              <View style={styles.modalBackground }>
              <Text style={styles.ltext}>ITS LOADING</Text>
                <Loader type="Oval" color="#FFFFFF" height="40" width="40" justifyContent='center' alignItems='center'/>
              </View>
          </div> : null }
        </View>

        );
    } //End of render
} //End of class
export default Results;
//Component css
const styles = StyleSheet.create({

  container: {
    alignContent: "center",
    backgroundColor: '#FAFAFA',
    height: '100%'
  },
  containerAll: {
    alignContent: "center",
    backgroundColor: '#FAFAFA',
    paddingTop: 20,
    position: "absolute",
    top: '10%',
    right: '0%',
    left: '0%',
    bottom: '0%',
  },
  containerData: {
    alignContent: "center",
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 10,

  },
  modalBackground: {
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
  ltext: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingBottom: 50
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
}
});