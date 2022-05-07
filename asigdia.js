import { tomadatos} from "./app.js";

export function asigdia1(aux1,dia_inicio,mes_inicio) {
    let aux4 = aux1 % 4;
    if (aux4 === 0){
        
        return asigmes(dia_inicio,mes_inicio);
    }
    else {
        let aux3 = asigmes(dia_inicio,mes_inicio);
        if (aux3 >= 60){
            let aux6 = aux3 - 1;
            return aux6;
        }
        else{
            
            return aux3
        }
    }
}

export function asigdia2(aux2,dia_final,mes_final) {
    let aux5 = aux2 % 4;
    if (aux5 === 0){
        
        return asigmes(dia_final,mes_final);
    }
    else {
        let aux3 = asigmes(dia_final,mes_final);
        if (aux3 >= 60){
            
            let aux6 = aux3 - 1;
            return aux6;
        }
        else{
            
            return aux3;
        }
    }
}

function asigmes(dia,mes) {;
    switch (mes) {
        case 1: return enero(dia);
        break;
        case 2: return febrero(dia);
        break;
        case 3: return marzo(dia);
        break;
        case 4: return abril(dia);
        break;
        case 5: return mayo(dia);
        break;
        case 6: return junio(dia);
        break;
        case 7: return julio(dia);
        break;
        case 8: return agosto(dia);
        break;
        case 9: return septiembre(dia);
        break;
        case 10: return octubre(dia);
        break;
        case 11: return noviembre(dia);
        break;
        case 12: return diciembre(dia);
        break;
    }
}

function enero (dia){
    switch (dia){
        case 1: return 1;
        break;
        case 2: return 2;
        break;
        case 3: return 3;
        break;
        case 4: return 4;
        break;
        case 5: return 5;
        break;
        case 6: return 6;
        break;
        case 7: return 7;
        break;
        case 8: return 8;
        break;
        case 9: return 9;
        break;
        case 10: return 10;
        break;
        case 11: return 11;
        break;
        case 12: return 12;
        break;
        case 13: return 13;
        break;
        case 14: return 14;
        break;
        case 15: return 15;
        break;
        case 16: return 16;
        break;
        case 17: return 17;
        break;
        case 18: return 18;
        break;
        case 19: return 19;
        break;
        case 20: return 20;
        break;
        case 21: return 21;
        break;
        case 22: return 22;
        break;
        case 23: return 23;
        break;
        case 24: return 24;
        break;
        case 25: return 25;
        break;
        case 26: return 26;
        break;
        case 27: return 27;
        break;
        case 28: return 28;
        break;
        case 29: return 29;
        break;
        case 30: return 30;
        break;
        case 31: return 31;
        break;
    }
}

function febrero (dia){
    switch (dia){
        case 1: return  32;
        break;
        case 2: return  33;
        break;
        case 3: return  34;
        break;
        case 4: return  35;
        break;
        case 5: return  36;
        break;
        case 6: return  37;
        break;
        case 7: return  38;
        break;
        case 8: return  39;
        break;
        case 9: return  40;
        break;
        case 10: return  41;
        break;
        case 11: return  42;
        break;
        case 12: return  43;
        break;
        case 13: return  44;
        break;
        case 14: return  45;
        break;
        case 15: return  46;
        break;
        case 16: return  47;
        break;
        case 17: return  48;
        break;
        case 18: return  49;
        break;
        case 19: return  50;
        break;
        case 20: return  51;
        break;
        case 21: return  52;
        break;
        case 22: return  53;
        break;
        case 23: return  54;
        break;
        case 24: return  55;
        break;
        case 25: return  56;
        break;
        case 26: return  57;
        break;
        case 27: return  58;
        break;
        case 28: return  59;
        break;
        case 29: return  60;
        break;
    }
}

function marzo (dia){
    switch (dia){
        case 1: return 61;
        break;
        case 2: return 62;
        break;
        case 3: return 63
        break;
        case 4: return 64;
        break;
        case 5: return 65;
        break;
        case 6: return 66;
        break;
        case 7: return 67;
        break;
        case 8: return 68;
        break;
        case 9: return 69;
        break;
        case 10: return 70;
        break;
        case 11: return 71;
        break;
        case 12: return 72;
        break;
        case 13: return 73;
        break;
        case 14: return 74;
        break;
        case 15: return 75;
        break;
        case 16: return 76;
        break;
        case 17: return 77;
        break;
        case 18: return 78;
        break;
        case 19: return 79;
        break;
        case 20: return 80;
        break;
        case 21: return 81;
        break;
        case 22: return 82;
        break;
        case 23: return 83;
        break;
        case 24: return 84;
        break;
        case 25: return 85;
        break;
        case 26: return 86;
        break;
        case 27: return 87;
        break;
        case 28: return 88;
        break;
        case 29: return 89;
        break;
        case 30: return 90;
        break;
        case 31: return 91;
        break;
    }
}

function abril (dia){
    switch (dia){
        case 1: return 92;
        break;
        case 2: return 93;
        break;
        case 3: return 94;
        break;
        case 4: return 95;
        break;
        case 5: return 96;
        break;
        case 6: return 97;
        break;
        case 7: return 98;
        break;
        case 8: return 99;
        break;
        case 9: return 100;
        break;
        case 10: return 101;
        break;
        case 11: return 102;
        break;
        case 12: return 103;
        break;
        case 13: return 104;
        break;
        case 14: return 105;
        break;
        case 15: return 106;
        break;
        case 16: return 107;
        break;
        case 17: return 108;
        break;
        case 18: return 109;
        break;
        case 19: return 110;
        break;
        case 20: return 111;
        break;
        case 21: return 112;
        break;
        case 22: return 113;
        break;
        case 23: return 114;
        break;
        case 24: return 115;
        break;
        case 25: return 116;
        break;
        case 26: return 117;
        break;
        case 27: return 118;
        break;
        case 28: return 119;
        break
        case 29: return 120;
        break;
        case 30: return 121;
        break;
    }
}

function mayo (dia){
    switch (dia){
        case 1: return 122;
        break;
        case 2: return 123;
        break;
        case 3: return 124;
        break;
        case 4: return 125;
        break;
        case 5: return 126;
        break;
        case 6: return 127;
        break;
        case 7: return 128;
        break;
        case 8: return 129;
        break;
        case 9: return 130;
        break;
        case 10: return 131;
        break;
        case 11: return 132;
        break;
        case 12: return 133;
        break;
        case 13: return 134;
        break;
        case 14: return 135;
        break;
        case 15: return 136;
        break;
        case 16: return 137;
        break;
        case 17: return 138;
        break;
        case 18: return 139;
        break;
        case 19: return 140;
        break;
        case 20: return 141;
        break;
        case 21: return 142;
        break;
        case 22: return 143;
        break;
        case 23: return 144;
        break;
        case 24: return 145;
        break;
        case 25: return 146;
        break;
        case 26: return 147;
        break;
        case 27: return 148;
        break;
        case 28: return 149;
        break;
        case 29: return 150;
        break;
        case 30: return 151;
        break;
        case 31: return 152;
        break;
    }
}

function junio (dia){
    switch (dia){
        case 1: return 153;
        break;
        case 2: return 154;
        break;
        case 3: return 155;
        break;
        case 4: return 156;
        break;
        case 5: return 157;
        break;
        case 6: return 158;
        break;
        case 7: return 159;
        break;
        case 8: return 160;
        break;
        case 9: return 161;
        break;
        case 10: return 162;
        break;
        case 11: return 163;
        break;
        case 12: return 164;
        break;
        case 13: return 165;
        break;
        case 14: return 166;
        break;
        case 15: return 167;
        break;
        case 16: return 168;
        break;
        case 17: return 169;
        break;
        case 18: return 170;
        break;
        case 19: return 171;
        break;
        case 20: return 172;
        break;
        case 21: return 173;
        break;
        case 22: return 174;
        break;
        case 23: return 175;
        break;
        case 24: return 176;
        break;
        case 25: return 177;
        break;
        case 26: return 178;
        break;
        case 27: return 179;
        break;
        case 28: return 180;
        break;
        case 29: return 181;
        break;
        case 30: return 182;
        break;
    }
}

function julio (dia){
    switch (dia){
        case 1: return 183;
        break;
        case 2: return 184;
        break;
        case 3: return 185;
        break;
        case 4: return 186;
        break;
        case 5: return 187;
        break;
        case 6: return 188;
        break;
        case 7: return 189;
        break;
        case 8: return 190;
        break;
        case 9: return 191;
        break;
        case 10: return 192;
        break;
        case 11: return 193;
        break;
        case 12: return 194;
        break;
        case 13: return 195;
        break;
        case 14: return 196;
        break;
        case 15: return 197;
        break;
        case 16: return 198;
        break;
        case 17: return 199;
        break;
        case 18: return 200;
        break;
        case 19: return 201;
        break;
        case 20: return 202;
        break;
        case 21: return 203;
        break;
        case 22: return 204;
        break;
        case 23: return 205;
        break;
        case 24: return 206;
        break;
        case 25: return 207;
        break;
        case 26: return 208;
        break;
        case 27: return 209;
        break;
        case 28: return 210;
        break;
        case 29: return 211;
        break;
        case 30: return 212;
        break;
        case 31: return 213;
        break;
    }
}

function agosto (dia){
    switch (dia){
        case 1: return 214;
        break;
        case 2: return 215;
        break;
        case 3: return 216;
        break;
        case 4: return 217;
        break;
        case 5: return 218;
        break;
        case 6: return 219;
        break;
        case 7: return 220;
        break;
        case 8: return 221;
        break;
        case 9: return 222;
        break;
        case 10: return 223;
        break;
        case 11: return 224;
        break;
        case 12: return 225;
        break;
        case 13: return 226;
        break;
        case 14: return 227;
        break;
        case 15: return 228;
        break;
        case 16: return 229;
        break;
        case 17: return 230;
        break;
        case 18: return 231;
        break;
        case 19: return 232;
        break;
        case 20: return 233;
        break;
        case 21: return 234;
        break;
        case 22: return 235;
        break;
        case 23: return 236;
        break;
        case 24: return 237;
        break;
        case 25: return 238;
        break;
        case 26: return 239;
        break;
        case 27: return 240;
        break;
        case 28: return 241;
        break;
        case 29: return 242;
        break;
        case 30: return 243;
        break;
        case 31: return 244;
        break;
    }
}

function septiembre (dia){
    switch (dia){
        case 1: return 245;
        break;
        case 2: return 246;
        break;
        case 3: return 247;
        break;
        case 4: return 248;
        break;
        case 5: return 249;
        break;
        case 6: return 250;
        break;
        case 7: return 251;
        break;
        case 8: return 252;
        break;
        case 9: return 253;
        break;
        case 10: return 254;
        break;
        case 11: return 255;
        break;
        case 12: return 256;
        break;
        case 13: return 257;
        break;
        case 14: return 258;
        break;
        case 15: return 259;
        break;
        case 16: return 260;
        break;
        case 17: return 261;
        break;
        case 18: return 262;
        break;
        case 19: return 263;
        break;
        case 20: return 264;
        break;
        case 21: return 265;
        break;
        case 22: return 266;
        break;
        case 23: return 267;
        break;
        case 24: return 268;
        break;
        case 25: return 269;
        break;
        case 26: return 270;
        break;
        case 27: return 271;
        break;
        case 28: return 272;
        break;
        case 29: return 273;
        break;
        case 30: return 274;
        break;
    }
}

function octubre (dia){
    switch (dia){
        case 1: return 275;
        break;
        case 2: return 276;
        break;
        case 3: return 277;
        break;
        case 4: return 278;
        break;
        case 5: return 279;
        break;
        case 6: return 280;
        break;
        case 7: return 281;
        break;
        case 8: return 282;
        break;
        case 9: return 283;
        break;
        case 10: return 284;
        break;
        case 11: return 285;
        break;
        case 12: return 286;
        break;
        case 13: return 287;
        break;
        case 14: return 288;
        break;
        case 15: return 289;
        break;
        case 16: return 290;
        break;
        case 17: return 291;
        break;
        case 18: return 292;
        break;
        case 19: return 293;
        break;
        case 20: return 294;
        break;
        case 21: return 295;
        break;
        case 22: return 296;
        break;
        case 23: return 297;
        break;
        case 24: return 298;
        break;
        case 25: return 299;
        break;
        case 26: return 300;
        break;
        case 27: return 301;
        break;
        case 28: return 302;
        break;
        case 29: return 303;
        break;
        case 30: return 304;
        break;
        case 31: return 305;
        break;
    }
}

function noviembre (dia){
    switch (dia){
        case 1: return 306;
        break;
        case 2: return 307;
        break;
        case 3: return 308;
        break;
        case 4: return 309;
        break;
        case 5: return 310;
        break;
        case 6: return 311;
        break;
        case 7: return 312;
        break;
        case 8: return 313;
        break;
        case 9: return 314;
        break;
        case 10: return 315;
        break;
        case 11: return 316;
        break;
        case 12: return 317;
        break;
        case 13: return 318;
        break;
        case 14: return 319;
        break;
        case 15: return 320;
        break;
        case 16: return 321;
        break;
        case 17: return 322;
        break;
        case 18: return 323;
        break;
        case 19: return 324;
        break;
        case 20: return 325;
        break;
        case 21: return 326;
        break;
        case 22: return 327;
        break;
        case 23: return 328;
        break;
        case 24: return 329;
        break;
        case 25: return 330;
        break;
        case 26: return 331;
        break;
        case 27: return 332;
        break;
        case 28: return 333;
        break;
        case 29: return 334;
        break;
        case 30: return 335;
        break;
    }
}

function diciembre(dia){
    switch (dia){
        case 1: return 336;
        break;
        case 2: return 337;
        break;
        case 3: return 338;
        break;
        case 4: return 339;
        break;
        case 5: return 340;
        break;
        case 6: return 341;
        break;
        case 7: return 342;
        break;
        case 8: return 343;
        break;
        case 9: return 344;
        break;
        case 10: return 345;
        break;
        case 11: return 346;
        break;
        case 12: return 347;
        break;
        case 13: return 348;
        break;
        case 14: return 349;
        break;
        case 15: return 350;
        break;
        case 16: return 351;
        break;
        case 17: return 352;
        break;
        case 18: return 353;
        break;
        case 19: return 354;
        break;
        case 20: return 355;
        break;
        case 21: return 356;
        break;
        case 22: return 357;
        break;
        case 23: return 358;
        break;
        case 24: return 359;
        break;
        case 25: return 360;
        break;
        case 26: return 361;
        break;
        case 27: return 362;
        break;
        case 28: return 363;
        break;
        case 29: return 364;
        break;
        case 30: return 365;
        break;
        case 31: return 366;
        break;
    }
}