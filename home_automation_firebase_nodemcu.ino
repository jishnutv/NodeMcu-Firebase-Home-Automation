#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define FIREBASE_HOST "yourdatabse.firebaseio.com"
#define FIREBASE_AUTH "yourauthkey"
#define WIFI_SSID "yourwifi"
#define WIFI_PASSWORD "yourwifipassword"

int device1 = D0;
int device2 = D1;
int device3 = D2;
int device4 = D3;
int device5 = D4;
int device6 = D5;
int device7 = D6;
int device8 = D7;
int device9 = D8;

void setup(){
    pinMode(device1, OUTPUT);
    pinMode(device2, OUTPUT);
    pinMode(device3, OUTPUT);
    pinMode(device4, OUTPUT);
    pinMode(device5, OUTPUT);
    pinMode(device6, OUTPUT);
    pinMode(device7, OUTPUT);
    pinMode(device8, OUTPUT);
    pinMode(device9, OUTPUT);

    Serial.begin(9600);
  
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting");
    while(WiFi.status() != WL_CONNECTED){
        Serial.print(".");
        delay(500);
      }
      Serial.println();
      Serial.print("connected: ");
      Serial.println(WiFi.localIP());

      Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  }

void loop(){

   if(Firebase.failed()){
       Serial.print("Firebase error");
       Serial.println(Firebase.error());
     }

//    String device1Val = Firebase.getString("automation/device1");
//    Serial.print(device1Val);

  if(Firebase.getString("automation/device1") == "on"){
      digitalWrite(device1, HIGH);
      Serial.print("Devive1 : on\n");
    }else if(Firebase.getString("automation/device1") == "off"){
        digitalWrite(device1, LOW);
        Serial.print("Devive1 : off\n");
      }

  if(Firebase.getString("automation/device2") == "on"){
      digitalWrite(device2, HIGH);
      Serial.print("Devive2 : on\n");
    }else if(Firebase.getString("automation/device2") == "off"){
        digitalWrite(device2, LOW);
        Serial.print("Devive2 : off\n");
      }

  if(Firebase.getString("automation/device3") == "on"){
      digitalWrite(device3, HIGH);
      Serial.print("Devive3 : on\n");
    }else if(Firebase.getString("automation/device3") == "off"){
        digitalWrite(device3, LOW);
        Serial.print("Devive3 : off\n");
      }

  if(Firebase.getString("automation/device4") == "on"){
      digitalWrite(device4, HIGH);
      Serial.print("Devive4 : on\n");
    }else if(Firebase.getString("automation/device4") == "off"){
        digitalWrite(device4, LOW);
        Serial.print("Devive4 : off\n");
      }

  if(Firebase.getString("automation/device5") == "on"){
      digitalWrite(device5, HIGH);
      Serial.print("Devive5 : on\n");
    }else if(Firebase.getString("automation/device5") == "off"){
        digitalWrite(device5, LOW);
        Serial.print("Devive5 : off\n");
      }
  if(Firebase.getString("automation/device6") == "on"){
      digitalWrite(device6, HIGH);
      Serial.print("Devive6 : on\n");
    }else if(Firebase.getString("automation/device6") == "off"){
        digitalWrite(device6, LOW);
        Serial.print("Devive6 : off\n");
      }

  if(Firebase.getString("automation/device7") == "on"){
      digitalWrite(device7, HIGH);
      Serial.print("Devive7 : on\n");
    }else if(Firebase.getString("automation/device7") == "off"){
        digitalWrite(device7, LOW);
        Serial.print("Devive7 : off\n");
      }

  if(Firebase.getString("automation/device8") == "on"){
      digitalWrite(device8, HIGH);
      Serial.print("Devive8 : on\n");
    }else if(Firebase.getString("automation/device8") == "off"){
        digitalWrite(device8, LOW);
        Serial.print("Devive8 : off\n");
      }

  if(Firebase.getString("automation/device9") == "on"){
      digitalWrite(device9, HIGH);
      Serial.print("Devive9 : on\n---------------------------\n");
    }else if(Firebase.getString("automation/device9") == "off"){
        digitalWrite(device9, LOW);
        Serial.print("Devive9 : off\n---------------------------\n");
      }
}
