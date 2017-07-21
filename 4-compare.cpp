#include <cmath>
#include <cstdio>
#include <iostream>
#include <string>
#include <vector>
#include <cctype>
#include <algorithm>
using namespace std;

string delspaces(string str) {
    
    while (str.find(' ') != -1) {
        str.erase (str.begin()+str.find(' ')); 
    }

    return str;
}

string uniq(string s) {

    string ar;
    string br;
    string cr;
    int i = 1;
    
    ar = s.substr(0,1);
    br = s.substr(1);
    
    while (i > 0) {
        
        while (br.find(ar) != -1) {  
            br.erase (br.begin()+br.find(ar)); 
        }
        cr += ar;
        if (br.size() > 1) {
            ar = br.substr(0,1);
            br = br.substr(1);
        
        } else {
            cr += br;
            i = 0;
        }
    }
  
    return cr;
}

string comp(string s1, string s2) {

    string ar;
    string a;
    string b;
    
    for (int i = 0; i < s1.size(); i++) {
        a = s1.substr(i,1);
        for (int j = 0; j < s2.size(); j++) {
            b = s2.substr(j,1);
            if (a == b) {
                ar.append(a);
            }    
        }
    }

    return ar;
}

int main() {
    string str1;
    string str2;
    
    getline(cin,str1);
    getline(cin,str2);

    str1 = delspaces(str1);
    str2 = delspaces(str2);
    
    str1 = uniq(str1);
    str2 = uniq(str2);
    
    str1 = comp(str1,str2);
    
    cout << str1 << endl;
    return 0;
}
