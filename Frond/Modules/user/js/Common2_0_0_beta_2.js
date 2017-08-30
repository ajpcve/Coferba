var _byteLenKey="org.apache.myfaces.trinidad.validator.ByteLengthValidator.MAXIMUM";
function TrByteLengthValidator(
a0,
a1
)
{
this._length=a0;
this._messages=a1;
this._class="TrByteLengthValidator";
}
TrByteLengthValidator.prototype=new TrValidator();
function CjkFormat(
a0,
a1
)
{
this._base=TrByteLengthValidator;
this._base(a0,a1);
this._class="CjkFormat";
}
CjkFormat.prototype=new TrByteLengthValidator();
CjkFormat.prototype.getHints=function(
a2
)
{
var a3=null;
if(this._messages["hint"])
{
a3=new Array();
a3.push(TrMessageFactory.createCustomMessage(
this._messages["hint"],
this._length)
);
}
return a3;
}
CjkFormat.prototype.validate=function(
a4,
a5,
a6
)
{
var a7=0;
var a8=this._length;
while(a7<a4.length)
{
var a9=a4.charCodeAt(a7);
if((a9<0x80)||((0xFF60<a9)&&(a9<0xFFA0)))a8--;
else a8-=2;
if(a8<0)
{
var a10;
if(!this._messages["detail"])
{
a10=_createFacesMessage(_byteLenKey,
a5,
a4,
this._length);
}
else
{
a10=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(_byteLenKey),
this._messages["detail"],
a5,
a4,
this._length);
}
throw new TrValidatorException(a10);
}
a7++;
}
return a4;
}
function Utf8Format(
a0,
a1
)
{
this._base=TrByteLengthValidator;
this._base(a0,a1);
this._class="Utf8Format";
}
Utf8Format.prototype=new TrByteLengthValidator();
Utf8Format.prototype.getHints=function(
a2
)
{
var a3=null;
if(this._messages["hint"])
{
a3=new Array();
a3.push(TrMessageFactory.createCustomMessage(
this._messages["hint"],
this._length)
);
}
return a3;
}
Utf8Format.prototype.validate=function(
a4,
a5,
a6
)
{
var a7=0;
var a8=this._length;
while(a7<a4.length)
{
var a9=a4.charCodeAt(a7);
if(a9<0x80)a8--;
else if(a9<0x800)a8-=2;
else
{
if((a9&0xF800)==0xD800)
a8-=2;
else
a8-=3;
}
if(a8<0)
{
var a10;
if(!this._messages["detail"])
{
a10=_createFacesMessage(_byteLenKey,
a5,
a4,
this._length);
}
else
{
a10=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(_byteLenKey),
this._messages["detail"],
a5,
a4,
this._length);
}
throw new TrValidatorException(a10);
}
a7++;
}
return a4;
}
function SBFormat(
a0,
a1
)
{
this._base=TrByteLengthValidator;
this._base(a0,a1);
this._class="SBFormat";
}
SBFormat.prototype=new TrByteLengthValidator();
SBFormat.prototype.getHints=function(
a2
)
{
var a3=null;
if(this._messages["hint"])
{
a3=new Array();
a3.push(TrMessageFactory.createCustomMessage(
this._messages["hint"],
this._length)
);
}
return a3;
}
SBFormat.prototype.validate=function(
a4,
a5,
a6
)
{
if(this._length<a4.length)
{
var a7;
if(!this._messages["detail"])
{
a7=_createFacesMessage(_byteLenKey,
a5,
a4,
this._length);
}
else
{
a7=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(_byteLenKey),
this._messages["detail"],
a5,
a4,
this._length);
}
throw new TrValidatorException(a7);
}
return a4;
}

function TrNumberFormat(a0,a1)
{
if(!a0)
alert("type for TrNumberFormat not defined!");
this._type=a0;
this._localeSymbols=getLocaleSymbols(a1);
this._pPre=this._localeSymbols.getPositivePrefix();
this._pSuf=this._localeSymbols.getPositiveSuffix();
this._nPre=this._localeSymbols.getNegativePrefix();
this._nSuf=this._localeSymbols.getNegativeSuffix();
this._maxFractionDigits=3;
this._maxIntegerDigits=40;
if(this._type=="currency")
{
this._minFractionDigits=2;
}
else
{
this._minFractionDigits=0;
}
this._minIntegerDigits=1;
this._groupingUsed=true;
}
TrNumberFormat.getNumberInstance=function(a2)
{
return new TrNumberFormat("number",a2);
}
TrNumberFormat.getCurrencyInstance=function(a3)
{
return new TrNumberFormat("currency",a3);
}
TrNumberFormat.getPercentInstance=function(a4)
{
return new TrNumberFormat("percent",a4);
}
TrNumberFormat.prototype.setGroupingUsed=function(a5)
{
this._groupingUsed=a5;
}
TrNumberFormat.prototype.isGroupingUsed=function()
{
return this._groupingUsed;
}
TrNumberFormat.prototype.setMaximumIntegerDigits=function(a6)
{
if(a6)
{
this._maxIntegerDigits=a6<0?0:a6;
if(this._minIntegerDigits>this._maxIntegerDigits)
{
this._minIntegerDigits=this._maxIntegerDigits;
}
}
}
TrNumberFormat.prototype.getMaximumIntegerDigits=function()
{
return this._maxIntegerDigits;
}
TrNumberFormat.prototype.setMaximumFractionDigits=function(a7)
{
if(a7)
{
this._maxFractionDigits=a7<0?0:a7;
if(this._maxFractionDigits<this._minFractionDigits)
{
this._minFractionDigits=this._maxFractionDigits;
}
}
}
TrNumberFormat.prototype.getMaximumFractionDigits=function()
{
return this._maxFractionDigits;
}
TrNumberFormat.prototype.setMinimumIntegerDigits=function(a8)
{
if(a8)
{
this._minIntegerDigits=a8<0?0:a8;
if(this._minIntegerDigits>this._maxIntegerDigits)
{
this._maxIntegerDigits=this._minIntegerDigits;
}
}
}
TrNumberFormat.prototype.getMinimumIntegerDigits=function()
{
return this._minIntegerDigits;
}
TrNumberFormat.prototype.setMinimumFractionDigits=function(a9)
{
if(a9)
{
this._minFractionDigits=a9<0?0:a9;
if(this._maxFractionDigits<this._minFractionDigits)
{
this._maxFractionDigits=this._minFractionDigits;
}
}
}
TrNumberFormat.prototype.getMinimumFractionDigits=function()
{
return this._minFractionDigits;
}
TrNumberFormat.prototype.format=function(a10)
{
if(this._type=="percent")
return this.percentageToString(a10);
else if(this._type=="currency")
return this.currencyToString(a10);
else if(this._type=="number")
return this.numberToString(a10);
}
TrNumberFormat.prototype.parse=function(a11)
{
if(this._type=="percent")
return this.stringToPercentage(a11);
else if(this._type=="currency")
return this.stringToCurrency(a11);
return this.stringToNumber(a11);
}
TrNumberFormat.prototype.stringToNumber=function(a12)
{
if(isNaN(a12)||a12.indexOf('e')!=-1||a12.indexOf('E')!=-1)
{
throw new TrParseException("not able to parse number");
}
return parseFloat(a12);
}
TrNumberFormat.prototype.stringToCurrency=function(a13)
{
var a14=a13.indexOf(this._nPre);
var a15=this._nSuf;
if(a15.charAt(0)==' '||a15.charAt(0)=='\xa0')
a15=a15.substring(1);
var a16=a13.indexOf(a15);
if(a14!=-1&&a16!=-1)
{
a13=a13.substr(this._nPre.length,a13.length-(this._nPre.length+a15.length));
return(this.stringToNumber(a13)*-1);
}
else
{
var a17=a13.indexOf(this._pPre);
var a18=this._pSuf;
if(a18.charAt(0)==' '||a18.charAt(0)=='\xa0')
a18=a18.substring(1);
var a19=a13.indexOf(a18);
if(a17!=-1&&a19!=-1)
{
a13=a13.substr(this._pPre.length,a13.length-(this._pPre.length+a18.length));
a13=this.stringToNumber(a13);
return a13;
}
else
{
throw new TrParseException("not able to parse number");
}
}
}
TrNumberFormat.prototype.stringToPercentage=function(a20)
{
var a21=(a20.indexOf('%')!=-1);
if(!a21)
{
throw new TrParseException("not able to parse number");
}
var a22=a20.replace(/\%/g,'');
return this.stringToNumber(a22);
}
TrNumberFormat.prototype.numberToString=function(a23)
{
var a24=a23<0;
if(a24)
a23=(a23*-1);
var a25=a23+"";
a25=TrNumberFormat.scientificToExpanded(a25);
var a26=a25.indexOf(".");
var a27=a25.length;
var a28;
var a29;
if(a26!=-1)
{
a28=a25.substring(0,a26);
a29=a25.substring(a26+1,a27);
}
else
{
a28=a25;
a29="";
}
a28=this._formatIntegers(a28);
a29=this._formatFractions(a29)
var a30=this._localeSymbols.getDecimalSeparator();
if(a29!="")
a25=(a28+a30+a29);
else
a25=(a28);
if(a24)
a25="-"+a25;
return a25;
}
TrNumberFormat.prototype.currencyToString=function(a31)
{
if(a31<0)
{
a31=(a31*-1)+"";
a31=this.numberToString(a31);
return this._nPre+a31+this._nSuf;
}
else
{
a31=this.numberToString(a31);
return this._pPre+a31+this._pSuf;
}
}
TrNumberFormat.prototype.percentageToString=function(a32)
{
a32=a32*100;
a32=this.getRounded(a32);
if(isNaN(a32))
{
throw new TrParseException("not able to parse number");
}
var a33=this._localeSymbols.getPercentSuffix();
if(!a33||a33=="")
{
throw new TrParseException("percent suffix undefined or empty");
}
a32=this.numberToString(a32);
return a32+a33;
}
TrNumberFormat.scientificToExpanded=function(a34)
{
var a35=a34.indexOf('e');
if(a35==-1)
return a34;
var a36="";
if(a34.charAt(0)=='-')
{
a36="-";
a34=a34.substring(1);
a35-=1;
}
var a37=a34.charAt(a35+1)=='+';
var a38=parseInt(a34.substring(a35+2));
var a39=a35-2;
var a40="";
if(a37)
{
for(var a41=0;a41<a38-a39;++a41)
a40+="0";
return a36+a34.charAt(0)+a34.substring(2,a35)+a40;
}
for(var a41=0;a41<a38-1;++a41)
a40+="0";
return a36+"0."+a40+a34.charAt(0)+a34.substring(2,a35);
}
TrNumberFormat.trimLeadingZeroes=function(a42)
{
var a43=[];
var a44,ch;
for(a44=0;a44<a42.length;++a44)
{
ch=a42.charAt(a44);
if((ch>='1'&&ch<='9')||ch=='.')
break;
if(ch=='0'&&a44+1<a42.length&&a42.charAt(a44+1)!='.')
continue;
a43.push(ch);
}
return a43.join('')+a42.substring(a44);
}
TrNumberFormat.prototype.getRounded=function(a45)
{
a45=this.moveDecimalRight(a45);
a45=Math.round(a45);
a45=this.moveDecimalLeft(a45);
return a45;
}
TrNumberFormat.prototype.moveDecimalRight=function(a46)
{
var a47='';
a47=this.moveDecimal(a46,false);
return a47;
}
TrNumberFormat.prototype.moveDecimalLeft=function(a48)
{
var a49='';
a49=this.moveDecimal(a48,true);
return a49;
}
TrNumberFormat.prototype.moveDecimal=function(a50,a51)
{
var a52='';
a52=this.moveDecimalAsString(a50,a51);
return parseFloat(a52);
}
TrNumberFormat.prototype.moveDecimalAsString=function(a53,a54)
{
var a55=2;
if(a55<=0)
return a53;
var a56=a53+'';
var a57=this.getZeros(a55);
var a58=new RegExp('([0-9.]+)');
if(a54)
{
a56=a56.replace(a58,a57+'$1');
var a59=new RegExp('(-?)([0-9]*)([0-9]{'+a55+'})(\\.?)');
a56=a56.replace(a59,'$1$2.$3');
}
else
{
var a60=a58.exec(a56);
if(a60!=null)
{
a56=a56.substring(0,a60.index)+a60[1]+a57+a56.substring(a60.index+a60[0].length);
}
var a59=new RegExp('(-?)([0-9]*)(\\.?)([0-9]{'+a55+'})');
a56=a56.replace(a59,'$1$2$4.');
}
a56=a56.replace(/\.$/,'');
return a56;
}
TrNumberFormat.prototype.getZeros=function(a61)
{
var a62='';
var a63;
for(a63=0;a63<a61;a63++){
a62+='0';
}
return a62;
}
TrNumberFormat.prototype._formatIntegers=function(a64)
{
var a65=a64.length;
var a66=this.getMaximumIntegerDigits();
var a67=this.getMinimumIntegerDigits();
var a68;
if(a65>a66)
{
a68=a65-a66;
a64=a64.substring(a68,a65);
}
else if(a65<a67)
{
a68=a67-a65;
var a69="";
while(a68>0)
{
a69="0"+a69;
--a68;
}
a64=a69+a64;
}
if(this.isGroupingUsed())
{
a64=this._addGroupingSeparators(a64);
}
return a64;
}
TrNumberFormat.prototype._formatFractions=function(a70)
{
var a71=a70.length;
var a72=this.getMaximumFractionDigits();
var a73=this.getMinimumFractionDigits();
if(a71>a72&&a72>=a73)
{
a70=a70.substring(0,a72);
}
if(a71<a73)
{
var a74=a73-a71;
while(a74>0)
{
a70=a70+"0";
--a74;
}
}
return a70;
}
TrNumberFormat.prototype._addGroupingSeparators=function(a75)
{
var a76=a75.length;
var a77=a76%3;
var a78;
var a79;
var a80="";
var a81=this._localeSymbols.getGroupingSeparator();
if(a77>0)
{
a78=(a76<4)?a75.substring(0,a77):a75.substring(0,a77)+a81;
a79=a75.substring(a77,a76);
}
else
{
a78="";
a79=a75;
}
for(i=0;i<a79.length;i++)
{
if(i%3==0&&i!=0)
{
a80+=a81;
}
a80+=a79.charAt(i);
}
a75=a78+a80;
return a75;
}
function TrParseException(
a0
)
{
this._message=a0;
}
TrParseException.prototype.getMessage=function()
{
return this._message;
}

function TrNumberConverter(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7,
a8,
a9,
a10,
a11)
{
this._pattern=a0;
this._type=a1;
this._locale=a2;
this._messages=a3;
this._currencyCode=a6;
this._currencySymbol=a7;
this._maxFractionDigits=a8;
this._maxIntegerDigits=a9;
this._minFractionDigits=a10;
this._minIntegerDigits=a11;
if(a4!==undefined)
this._integerOnly=a4;
else
this._integerOnly=false;
if(a5!==undefined)
this._groupingUsed=a5;
else
this._groupingUsed=true;
this._initNumberFormat(a2);
this._class="TrNumberConverter";
}
TrNumberConverter.prototype=new TrConverter();
TrNumberConverter.prototype.setCurrencyCode=function(a12)
{
this._currencyCode=a12;
}
TrNumberConverter.prototype.getCurrencyCode=function()
{
return this._currencyCode;
}
TrNumberConverter.prototype.setCurrencySymbol=function(a13)
{
this._currencySymbol=a13;
}
TrNumberConverter.prototype.getCurrencySymbol=function()
{
return this._currencySymbol;
}
TrNumberConverter.prototype.setMaxFractionDigits=function(a14)
{
this._maxFractionDigits=a14;
}
TrNumberConverter.prototype.getMaxFractionDigits=function()
{
return this._maxFractionDigits;
}
TrNumberConverter.prototype.setMaxIntegerDigits=function(a15)
{
this._maxIntegerDigits=a15;
}
TrNumberConverter.prototype.getMaxIntegerDigits=function()
{
return this._maxIntegerDigits;
}
TrNumberConverter.prototype.setMinFractionDigits=function(a16)
{
this._minFractionDigits=a16;
}
TrNumberConverter.prototype.getMinFractionDigits=function()
{
return this._minFractionDigits;
}
TrNumberConverter.prototype.setMinIntegerDigits=function(a17)
{
this._minIntegerDigits=a17;
}
TrNumberConverter.prototype.getMinIntegerDigits=function()
{
return this._minIntegerDigits;
}
TrNumberConverter.prototype.setGroupingUsed=function(a18)
{
this._groupingUsed=a18;
}
TrNumberConverter.prototype.isGroupingUsed=function()
{
return this._groupingUsed;
}
TrNumberConverter.prototype.setIntegerOnly=function(a19)
{
this._integerOnly=a19;
}
TrNumberConverter.prototype.isIntegerOnly=function()
{
return this._integerOnly;
}
TrNumberConverter.prototype.getFormatHint=function()
{
if(this._messages&&this._messages["hintPattern"])
{
return TrMessageFactory.createCustomMessage(
this._messages["hintPattern"],
this._pattern);
}
else
{
if(this._pattern)
{
return TrMessageFactory.createMessage(
"org.apache.myfaces.trinidad.convert.NumberConverter.FORMAT_HINT",
this._pattern);
}
else
{
return null;
}
}
}
TrNumberConverter.prototype.getAsString=function(
a20,
a21
)
{
if(this._isConvertible())
{
if(this._type=="percent"||this._type=="currency")
{
var a22=this._numberFormat.format(a20);
if(this._type=="currency")
{
if(this._currencyCode)
{
a22=a22.replace(getLocaleSymbols().getCurrencyCode(),this._currencyCode);
}
else if(this._currencySymbol)
{
a22=a22.replace(getLocaleSymbols().getCurrencySymbol(),this._currencySymbol);
}
}
return a22;
}
else
{
if(typeof a20==="string")
{
return this._numberFormat.format(parseFloat(a20));
}
else
{
return this._numberFormat.format(parseFloat(a20.toFixed(this._numberFormat.getMaximumFractionDigits())));
}
}
}
else
{
return undefined;
}
}
TrNumberConverter.prototype.getAsObject=function(
a23,
a24
)
{
a23=TrUIUtils.trim(a23);
if(this._isConvertible(a23))
{
if(a23==null)
return null;
if(a23.length==0)
return null
var a25;
if(this._type=="percent"||this._type=="currency")
{
var a26=getLocaleSymbols(this._locale);
var a27=a26.getGroupingSeparator();
if(a27=="\xa0")
{
var a28=new RegExp("\\ ","g");
a23=a23.replace(a28,"\xa0");
}
var a29=new RegExp("\\"+a27,"g");
a23=a23.replace(a29,"");
var a30=a26.getDecimalSeparator();
var a31=new RegExp("\\"+a30,"g");
a23=a23.replace(a31,".");
try
{
a23=this._numberFormat.parse(a23)+"";
}
catch(e)
{
try
{
a23=TrNumberFormat.getNumberInstance().parse(a23)+"";
}
catch(e)
{
var a32;
var a33=this._numberFormat.format(this._example);
var a34="org.apache.myfaces.trinidad.convert.NumberConverter.CONVERT_"+this._type.toUpperCase();
if(this._messages&&this._messages[this._type])
{
a32=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a34),this._messages[this._type],a24,a23,a33);
}
else
{
a32=_createFacesMessage(a34,a24,a23,a33);
}
throw new TrConverterException(a32);
}
}
var a35=new RegExp("\\"+".","g");
a23=a23.replace(a35,getLocaleSymbols().getDecimalSeparator());
}
a25=_decimalParse(a23,
this._messages,
"org.apache.myfaces.trinidad.convert.NumberConverter",
null,
null,
null,
null,
a24,
!this.isIntegerOnly());
a25=parseFloat(a25.toFixed(this._numberFormat.getMaximumFractionDigits()));
if(this._type=="percent")
{
a25=a25/100;
}
return a25;
}
else
{
return undefined;
}
}
TrNumberConverter.prototype._isConvertible=function(a36)
{
if(this._pattern!=null)
return false;
return TrUIUtils.isNumberConvertible(a36);
}
TrNumberConverter.prototype._initNumberFormat=function(a37)
{
if(this._type=="percent")
{
this._example=0.3423;
this._numberFormat=TrNumberFormat.getPercentInstance(a37);
}
else if(this._type=="currency")
{
this._example=10250;
this._numberFormat=TrNumberFormat.getCurrencyInstance(a37);
}
else if(this._type=="number")
{
this._numberFormat=TrNumberFormat.getNumberInstance(a37);
}
this._numberFormat.setGroupingUsed(this.isGroupingUsed());
this._numberFormat.setMaximumFractionDigits(this.getMaxFractionDigits());
this._numberFormat.setMaximumIntegerDigits(this.getMaxIntegerDigits());
this._numberFormat.setMinimumFractionDigits(this.getMinFractionDigits());
this._numberFormat.setMinimumIntegerDigits(this.getMinIntegerDigits());
}

function TrIntegerConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrIntegerConverter";
}
TrIntegerConverter.prototype=new TrConverter();
TrIntegerConverter.prototype.getFormatHint=function()
{
return null;
}
TrIntegerConverter.prototype.getAsString=function(
a5,
a6
)
{
return""+a5;
}
TrIntegerConverter.prototype.getAsObject=function(
a7,
a8
)
{
return _decimalParse(a7,
this._message,
"org.apache.myfaces.trinidad.convert.IntegerConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a8,
null);
}
function TrLongConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrLongConverter";
}
TrLongConverter.prototype=new TrConverter();
TrLongConverter.prototype.getFormatHint=function()
{
return null;
}
TrLongConverter.prototype.getAsString=function(
a5,
a6
)
{
return""+a5;
}
TrLongConverter.prototype.getAsObject=function(
a7,
a8
)
{
if(TrUIUtils.isNumberConvertible(a7))
{
return _decimalParse(a7,
this._message,
"org.apache.myfaces.trinidad.convert.LongConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a8,
null);
}
else
{
return undefined;
}
}
function TrShortConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrShortConverter";
}
TrShortConverter.prototype=new TrConverter();
TrShortConverter.prototype.getFormatHint=function()
{
return null;
}
TrShortConverter.prototype.getAsString=function(
a5,
a6
)
{
return""+a5;
}
TrShortConverter.prototype.getAsObject=function(
a7,
a8
)
{
return _decimalParse(a7,
this._message,
"org.apache.myfaces.trinidad.convert.ShortConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a8,
null);
}
function TrByteConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrByteConverter";
}
TrByteConverter.prototype=new TrConverter();
TrByteConverter.prototype.getFormatHint=function()
{
return null;
}
TrByteConverter.prototype.getAsString=function(
a5,
a6
)
{
return""+a5;
}
TrByteConverter.prototype.getAsObject=function(
a7,
a8
)
{
return _decimalParse(a7,
this._message,
"org.apache.myfaces.trinidad.convert.ByteConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a8,
null);
}
function TrDoubleConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrDoubleConverter";
}
TrDoubleConverter.prototype=new TrConverter();
TrDoubleConverter.prototype.getFormatHint=function()
{
return null;
}
TrDoubleConverter.prototype.getAsString=function(
a5,
a6
)
{
var a7=""+a5;
var a8=a7.indexOf(".");
if(a8!=-1)
return a7;
else
return""+a5.toFixed(1);
}
TrDoubleConverter.prototype.getAsObject=function(
a9,
a10
)
{
return _decimalParse(a9,
this._message,
"org.apache.myfaces.trinidad.convert.DoubleConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a10,
true,
true);
}
function TrFloatConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrFloatConverter";
}
TrFloatConverter.prototype=new TrConverter();
TrFloatConverter.prototype.getFormatHint=function()
{
return null;
}
TrFloatConverter.prototype.getAsString=function(
a5,
a6
)
{
var a7=""+a5;
var a8=a7.indexOf(".");
if(a8!=-1)
return a7;
else
return""+a5.toFixed(1);
}
TrFloatConverter.prototype.getAsObject=function(
a9,
a10
)
{
return _decimalParse(a9,
this._message,
"org.apache.myfaces.trinidad.convert.FloatConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a10,
true,
true);
}
function TrRangeValidator(
a0,
a1,
a2)
{
this._maxValue=a0;
this._minValue=a1;
this._messages=a2;
this._class="TrRangeValidator";
}
TrRangeValidator.prototype=new TrValidator();
TrRangeValidator.prototype.getHints=function(
a3
)
{
return _returnRangeHints(
this._messages,
this._maxValue,
this._minValue,
"org.apache.myfaces.trinidad.validator.RangeValidator.MAXIMUM_HINT",
"org.apache.myfaces.trinidad.validator.RangeValidator.MINIMUM_HINT",
"org.apache.myfaces.trinidad.validator.RangeValidator.RANGE_HINT",
"hintMax",
"hintMin",
"hintRange"
);
}
TrRangeValidator.prototype.validate=function(
a4,
a5,
a6
)
{
string=""+a4;
numberValue=parseFloat(string);
var a7;
if(this._minValue!=null&&this._maxValue!=null)
{
if(numberValue>=this._minValue&&numberValue<=this._maxValue)
{
return string;
}
else
{
var a8="org.apache.myfaces.trinidad.validator.LongRangeValidator.NOT_IN_RANGE";
if(this._messages&&this._messages["range"])
{
a7=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a8),
this._messages["range"],
a5,
string,
""+this._minValue,
""+this._maxValue);
}
else
{
a7=_createFacesMessage(a8,
a5,
string,
""+this._minValue,
""+this._maxValue);
}
}
}
else
{
if(this._minValue!=null)
{
if(numberValue>=this._minValue)
{
return string;
}
else
{
var a8="org.apache.myfaces.trinidad.validator.LongRangeValidator.MINIMUM";
if(this._messages&&this._messages["min"])
{
a7=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a8),
this._messages["min"],
a5,
string,
""+this._minValue);
}
else
{
a7=_createFacesMessage(a8,
a5,
string,
""+this._minValue);
}
}
}
else
{
if(this._maxValue==null||numberValue<=this._maxValue)
{
return string;
}
else
{
var a8="org.apache.myfaces.trinidad.validator.LongRangeValidator.MAXIMUM";
if(this._messages&&this._messages["max"])
{
a7=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a8),
this._messages["max"],
a5,
string,
""+this._maxValue);
}
else
{
a7=_createFacesMessage(a8,
a5,
string,
""+this._maxValue);
}
}
}
}
throw new TrConverterException(a7);
}
function TrLengthValidator(
a0,
a1,
a2)
{
this._maxValue=a0;
this._minValue=a1;
this._messages=a2;
this._class="TrLengthValidator";
}
TrLengthValidator.prototype=new TrValidator();
TrLengthValidator.prototype.getHints=function(
a3
)
{
return _returnRangeHints(
this._messages,
this._maxValue,
this._minValue,
"org.apache.myfaces.trinidad.validator.LengthValidator.MAXIMUM_HINT",
"org.apache.myfaces.trinidad.validator.LengthValidator.MINIMUM_HINT",
(this._minValue==this._maxValue)
?"org.apache.myfaces.trinidad.validator.LengthValidator.EXACT_HINT"
:"org.apache.myfaces.trinidad.validator.LengthValidator.RANGE_HINT",
"hintMax",
"hintMin",
"hintRange"
);
}
TrLengthValidator.prototype.validate=function(
a4,
a5,
a6
)
{
var a7=""+a4;
var a8=a7.length;
if(a8>=this._minValue&&
((this._maxValue==null)||(a8<=this._maxValue)))
{
return a7;
}
else
{
if((this._minValue>0)&&(this._maxValue!=null))
{
var a9=(this._minValue==this._maxValue);
var a10=a9
?"org.apache.myfaces.trinidad.validator.LengthValidator.EXACT"
:"org.apache.myfaces.trinidad.validator.LengthValidator.NOT_IN_RANGE";
var a11;
var a12="range";
if(this._messages&&this._messages[a12])
{
a11=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a10),
this._messages[a12],
a5,
a7,
""+this._minValue,
""+this._maxValue);
}
else
{
a11=_createFacesMessage(a10,
a5,
a7,
""+this._minValue,
""+this._maxValue);
}
throw new TrConverterException(a11);
}
else if(a8<this._minValue)
{
var a10="org.apache.myfaces.trinidad.validator.LengthValidator.MINIMUM";
var a11;
if(this._messages&&this._messages["min"])
{
a11=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a10),
this._messages["min"],
a5,
a7,
""+this._minValue);
}
else
{
a11=_createFacesMessage(a10,
a5,
a7,
""+this._minValue);
}
throw new TrConverterException(a11);
}
else
{
var a10="org.apache.myfaces.trinidad.validator.LengthValidator.MAXIMUM";
var a11;
if(this._messages&&this._messages["max"])
{
a11=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a10),
this._messages["max"],
a5,
a7,
""+this._maxValue);
}
else
{
a11=_createFacesMessage(a10,
a5,
a7,
""+this._maxValue);
}
throw new TrConverterException(a11);
}
}
}
function TrDateTimeRangeValidator(
a0,
a1,
a2,
a3,
a4
)
{
this._maxValue=a0;
this._maxISODate=a3;
this._minValue=a1;
this._minISODate=a4;
this._messages=a2;
this._class="TrDateTimeRangeValidator";
}
TrDateTimeRangeValidator.prototype=new TrValidator();
TrDateTimeRangeValidator.prototype.getHints=function(
a5
)
{
var a6=null;
var a7=null;
if(this._maxValue)
a6=this._maxValue;
if(this._minValue)
a7=this._minValue;
return _returnRangeHints(
this._messages,
a6,
a7,
"org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.MAXIMUM_HINT",
"org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.MINIMUM_HINT",
"org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.RANGE_HINT",
"hintMax",
"hintMin",
"hintRange"
);
}
TrDateTimeRangeValidator.prototype.validate=function(
a8,
a9,
a10
)
{
dateTime=a8.getTime();
var a11;
var a12=this._getISOConverter();
if(this._minValue&&this._maxValue)
{
try
{
minDate=(this._minISODate==null)?
a10.getAsObject(this._minValue).getTime():
a12.getAsObject(this._minISODate).getTime();
maxDate=(this._maxISODate==null)?
a10.getAsObject(this._maxValue).getTime():
a12.getAsObject(this._maxISODate).getTime();
}
catch(e)
{
return a8;
}
if(dateTime>=minDate&&dateTime<=maxDate)
{
return a8;
}
else
{
var a13="org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.NOT_IN_RANGE";
if(this._messages&&this._messages["range"])
{
a11=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a13),
this._messages["range"],
a9,
""+a10.getAsString(a8),
""+this._minValue,
""+this._maxValue);
}
else
{
a11=_createFacesMessage(a13,
a9,
""+a10.getAsString(a8),
""+this._minValue,
""+this._maxValue);
}
}
}
else
{
if(this._minValue)
{
try
{
minDate=(this._minISODate==null)?
a10.getAsObject(this._minValue).getTime():
a12.getAsObject(this._minISODate).getTime();
}
catch(e)
{
return a8;
}
if(dateTime>=minDate)
{
return a8;
}
else
{
var a13="org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.MINIMUM";
if(this._messages&&this._messages["min"])
{
a11=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a13),
this._messages["min"],
a9,
""+a10.getAsString(a8),
""+this._minValue);
}
else
{
a11=_createFacesMessage(a13,
a9,
""+a10.getAsString(a8),
""+this._minValue);
}
}
}
else if(this._maxValue)
{
try
{
maxDate=(this._maxISODate==null)?
a10.getAsObject(this._maxValue).getTime():
a12.getAsObject(this._maxISODate).getTime();
}
catch(e)
{
return a8;
}
if(dateTime<=maxDate)
{
return a8;
}
else
{
var a13="org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.MAXIMUM";
if(this._messages&&this._messages["max"])
{
a11=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a13),
this._messages["max"],
a9,
""+a10.getAsString(a8),
""+this._maxValue);
}
else
{
a11=_createFacesMessage(a13,
a9,
""+a10.getAsString(a8),
""+this._maxValue);
}
}
}
else
{
return a8;
}
}
throw new TrConverterException(a11);
}
TrDateTimeRangeValidator.prototype._getISOConverter=function()
{
if(this._ISO_CONVERTER==null)
this._ISO_CONVERTER=new TrDateTimeConverter("yyyy-MM-dd HH:mm:ss",null,null,null,null);
return this._ISO_CONVERTER;
}
function TrDateRestrictionValidator(
a0,
a1,
a2)
{
this._weekdaysValue=a0;
this._monthValue=a1;
this._messages=a2;
this._weekdaysMap={'2':'tue','4':'thu','6':'sat','1':'mon','3':'wed','5':'fri','0':'sun'};
this._translatedWeekdaysMap={'sun':'0','mon':'1','tue':'2','wed':'3','thu':'4','fri':'5','sat':'6'};
this._monthMap={'2':'mar','4':'may','9':'oct','8':'sep','11':'dec','6':'jul','1':'feb','3':'apr','10':'nov','7':'aug','5':'jun','0':'jan'};
this._translatedMonthMap={'jan':'0','feb':'1','mar':'2','apr':'3','may':'4','jun':'5','jul':'6','aug':'7','sep':'8','oct':'9','nov':'10','dec':'11'};
this._class="TrDateRestrictionValidator";
}
TrDateRestrictionValidator.prototype=new TrValidator();
TrDateRestrictionValidator.prototype.getHints=function(
a3
)
{
var a4=['mon','tue','wed','thu','fri','sat','sun'];
var a5=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
if(this._weekdaysValue)
this._removeDisabledValues(this._weekdaysValue,a4);
if(this._monthValue)
this._removeDisabledValues(this._monthValue,a5);
return _returnHints(
this._messages,
!this._weekdaysValue?this._weekdaysValue:this._translate(a4,this._translatedWeekdaysMap,a3.getLocaleSymbols().getWeekdays()),
!this._monthValue?this._monthValue:this._translate(a5,this._translatedMonthMap,a3.getLocaleSymbols().getMonths()),
"org.apache.myfaces.trinidad.validator.DateRestrictionValidator.WEEKDAY_HINT",
"org.apache.myfaces.trinidad.validator.DateRestrictionValidator.MONTH_HINT",
"hintWeek",
"hintMonth"
);
}
TrDateRestrictionValidator.prototype._translate=function(
values,
map,
valueArray
)
{
if(values)
{
var translatedValues=new Array();
var valuesAsArray=eval(values);
for(i=0;i<valuesAsArray.length;i++)
{
translatedValues.push(valueArray[map[valuesAsArray[i].toLowerCase()]]);
}
return eval(translatedValues);
}
else
{
return values;
}
}
TrDateRestrictionValidator.prototype._removeDisabledValues=function(
a6,
a7
)
{
if(a6&&a7)
{
for(i=0;i<a7.length;i++)
{
if(a6[a7[i].toLowerCase()]!=undefined)
{
a7.splice(i,1);
i--;
}
}
}
}
TrDateRestrictionValidator.prototype.validate=function(
value,
label,
converter
)
{
submittedDay=value.getDay();
weekDaysArray=eval(this._weekdaysValue);
if(weekDaysArray)
{
var dayString=this._weekdaysMap[submittedDay];
for(var i=0;i<weekDaysArray.length;++i)
{
if(weekDaysArray[i].toLowerCase()==dayString)
{
var allWeekdays=['mon','tue','wed','thu','fri','sat','sun'];
this._removeDisabledValues(this._weekdaysValue,allWeekdays);
var days=_trToString(this._translate(allWeekdays,this._translatedWeekdaysMap,converter.getLocaleSymbols().getWeekdays()));
var facesMessage;
var key="org.apache.myfaces.trinidad.validator.DateRestrictionValidator.WEEKDAY";
if(this._messages&&this._messages["days"])
{
facesMessage=_createCustomFacesMessage(TrMessageFactory.getSummaryString(key),
this._messages["days"],
label,
""+converter.getAsString(value),
days);
}
else
{
facesMessage=_createFacesMessage(key,
label,
""+converter.getAsString(value),
days);
}
throw new TrConverterException(facesMessage);
}
}
}
submittedMonth=value.getMonth();
monthArray=eval(this._monthValue);
if(monthArray)
{
var monthString=this._monthMap[submittedMonth];
for(var i=0;i<monthArray.length;++i)
{
if(monthArray[i].toLowerCase()==monthString)
{
var allMonth=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
TrCollections.removeValuesFromArray(this._monthValue,allMonth);
var month=_trToString(this._translate(allMonth,this._translatedMonthMap,converter.getLocaleSymbols().getMonths()));
var facesMessage;
var key="org.apache.myfaces.trinidad.validator.DateRestrictionValidator.MONTH";
if(this._messages&&this._messages["month"])
{
facesMessage=_createCustomFacesMessage(TrMessageFactory.getSummaryString(key),
this._messages["month"],
label,
""+converter.getAsString(value),
month);
}
else
{
facesMessage=_createFacesMessage(key,
label,
""+converter.getAsString(value),
month);
}
throw new TrConverterException(facesMessage);
}
}
}
return value;
}
function _decimalParse(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7,
a8,
a9
)
{
if(a0==null)
return null;
a0=TrUIUtils.trim(a0);
if(a0.length==0)
return null
var a10=null;
var a11=getLocaleSymbols();
if(a11&&(a9!=true))
{
var a12=a11.getGroupingSeparator();
if((a0.indexOf(a12)==0)||
(a0.lastIndexOf(a12)==(a0.length-1)))
{
a10=_createFacesMessage(a2+".CONVERT",
a7,
a0);
throw new TrConverterException(a10);
}
if(a12=="\xa0"){
var a13=new RegExp("\\ ","g");
a0=a0.replace(a13,"\xa0");
}
var a14=new RegExp("\\"+a12,"g");
a0=a0.replace(a14,"");
var a15=new RegExp("\\"+a11.getDecimalSeparator(),"g");
a0=a0.replace(a15,".");
}
if((a0.indexOf('e')<0)&&
(a0.indexOf('E')<0)&&
(((a0*a0)==0)||
((a0/a0)==1)))
{
var a16=null;
var a17=false;
if(a8!=null)
{
a0=TrNumberFormat.trimLeadingZeroes(a0);
a16=a8?parseFloat(a0):parseInt(a0);
}
else
{
a16=parseInt(a0);
if(Math.abs(a16)<Math.abs(parseFloat(a0)))
{
a17=true;
}
}
if(!a17&&!isNaN(a16))
{
var a18=a0.length;
var a19=0;
var a20=a0.lastIndexOf('.');
if(a20!=-1)
{
a18=a20;
a19=parseInt(a0.length-parseInt(a20+1));
}
var a21;
var a22;
if((a5!=null)&&
(a16>a5))
{
a21=a2+".MAXIMUM";
a22=a5;
}
else if((a6!=null)&&
(a16<a6))
{
a21=a2+".MINIMUM";
a22=a6;
}
if(a21)
{
a10=_createFacesMessage(a21,
a7,
a0,
""+a22);
throw new TrConverterException(a10);
}
return a16;
}
}
var a23=null;
var a24=false;
if(a2.indexOf("NumberConverter")==-1)
{
a23=a2+".CONVERT";
}
else
{
a23=a2+".CONVERT_NUMBER";
if(a1&&a1["number"])
{
a10=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a23),
a1["number"],
a7,
a0);
a24=true;
}
}
if(!a24)
{
a10=_createFacesMessage(a23,
a7,
a0);
}
throw new TrConverterException(a10);
}
function TrRegExpValidator(
a0,
a1
)
{
this._pattern=a0;
this._messages=a1;
this._class="TrRegExpValidator";
}
TrRegExpValidator.prototype=new TrValidator();
TrRegExpValidator.prototype.getHints=function(
a2
)
{
var a3=null;
if(this._messages["hint"])
{
a3=new Array();
a3.push(TrMessageFactory.createCustomMessage(
this._messages["hint"],
""+this._pattern)
);
}
return a3;
}
TrRegExpValidator.prototype.validate=function(
a4,
a5,
a6
)
{
a4=a4+'';
var a7="^("+this._pattern+")$";
var a8=a4.match(a7);
if((a8!=(void 0))&&(a8[0]==a4))
{
return a4;
}
else
{
var a9="org.apache.myfaces.trinidad.validator.RegExpValidator.NO_MATCH";
var a10;
if(this._messages&&this._messages["detail"])
{
a10=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(a9),
this._messages["detail"],
a5,
a4,
this._pattern);
}
else
{
a10=_createFacesMessage(a9,
a5,
a4,
this._pattern);
}
throw new TrValidatorException(a10);
}
}
function _returnRangeHints(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7,
a8
)
{
if(a1!=null&&a2!=null)
{
var a9=new Array();
if(a0&&a0[a8])
{
a9.push(
TrMessageFactory.createCustomMessage(
a0[a8],
""+a2,
""+a1)
);
}
else
{
a9.push(
TrMessageFactory.createMessage(
a5,
""+a2,
""+a1)
);
}
return a9;
}
return _returnHints(
a0,
a1,
a2,
a3,
a4,
a6,
a7
);
}
function _trToString(a0)
{
if(Array.prototype.isPrototypeOf(a0))
{
return a0.join(", ");
}
else
{
return""+a0;
}
}
function _returnHints(
a0,
a1,
a2,
a3,
a4,
a5,
a6
)
{
var a7;
if(a1!=null)
{
a7=new Array();
if(a0&&a0[a5])
{
a7.push(
TrMessageFactory.createCustomMessage(
a0[a5],
_trToString(a1))
);
}
else
{
a7.push(
TrMessageFactory.createMessage(
a3,
_trToString(a1))
);
}
}
if(a2!=null)
{
if(!a7)
{
a7=new Array();
}
if(a0&&a0[a6])
{
a7.push(
TrMessageFactory.createCustomMessage(
a0[a6],
_trToString(a2))
);
}
else
{
a7.push(
TrMessageFactory.createMessage(
a4,
_trToString(a2))
);
}
}
return a7;
}

var TrCollections=new Object();
TrCollections.removeValuesFromArray=function(
a0,
a1
)
{
if(a0&&a1)
{
for(i=0;i<a0.length;i++)
{
var a2=a0[i];
for(j=0;j<a1.length;j++)
{
if(a1[j].toLowerCase()==a2.toLowerCase())
{
a1.splice(j,1);
j--;
}
}
}
}
}

function _dfsv(
a0,
a1,
a2
)
{
if((a0==(void 0))||(a1==(void 0)))
return;
var a3=new Date(a1);
var a4=_getLocaleTimeZoneDifference2(a3,a2);
a1=_dfGetMidnight(a1+a4);
a1+=_getTimePortion(a0);
var a5=new Date(a1);
var a6=_getTimezoneDiff(a3,a5);
if(a6!=0)
a5=new Date(a1-a6);
var a7=_getDateFieldFormat(a0);
var a8=a0.value;
var a1=a7.getAsString(a5);
if(a0.value!=a1)
{
if(a0.onchange!=(void 0))
{
if(_agent.isIE)
{
a0.onpropertychange=function()
{
var a9=window.event;
if(a9.propertyName=='value')
{
a0.onpropertychange=function(){};
a0.onchange(a9);
}
}
a0.value=a1;
}
else
{
a0.value=a1;
var a9=new Object();
a9.type='change';
a9.target=a0;
a0.onchange(a9);
}
}
else
{
a0.value=a1;
}
}
a0.select();
a0.focus();
}
function _getDayLightSavOffset(a0)
{
var a1=new Date();
var a2=new Date(a0);
var a3=a2.getTimezoneOffset()-a1.getTimezoneOffset();
return(a3*60*1000);
}
function _returnCalendarValue(
a0,
a1
)
{
var a2=a0.returnValue;
if(a2!=(void 0))
{
var a3=a0._dateField;
if(a3==(void 0))
{
a3=_savedField1879034;
}
var a4=a0.serverOffsetInMins;
if(a4!=(void 0))
_dfsv(a3,a2,a4);
else
_dfsv(a3,a2);
}
}
function _returnPopupCalendarValue(
a0,
a1
)
{
if(a1!=(void 0))
{
var a2=a0['formName'];
var a3=a0['fieldName'];
var a4=document.forms[a2][a3];
_dfsv(a4,a1);
}
}
function _ldp(
a0,
a1,
a2,
a3,
a4,
a5
)
{
var a6=document.forms[a0][a1];
var a7=_dfgv(a6);
if(!a7)
{
a7=new Date();
}
if(!a5)
{
a5=_jspDir+_getQuerySeparator(_jspDir);
if(a2)
a5+="_t=cd";
else
a5+="_t=fred&_red=cd";
}
else
{
var a8=a5.lastIndexOf('?');
var a9="";
if(a8==-1)
{
a8=a5.length;
}
else
{
a9=a5.substr(a8+1);
}
var a10=a5.lastIndexOf('/',a8);
var a11=a5.substring(0,a10+1);
a11+=_jspDir+_getQuerySeparator(_jspDir);
a11+=a9;
a11+=_getQuerySeparator(a11);
a11+="_t=fred";
var a12=a5.substring(a10+1,a8);
a5=a11;
a5+="&redirect="+escape(a12);
}
var a13=a7.getTime()-_getLocaleTimeZoneDifference(a7);
a5+="&value="+a13
a5+="&loc="+_locale;
if(window["_enc"])
{
a5+="&enc="+_enc;
}
if(a3!=(void 0))
{
a5+="&minValue="+a3;
}
if(a4!=(void 0))
{
a5+="&maxValue="+a4;
}
if(a2)
{
TrPopupDialog._launchDialog(
a5,
{},
_returnPopupCalendarValue,
{'formName':a0,'fieldName':a1});
}
else
{
var a14=openWindow(self,
a5,
'uix_2807778',
{width:350,height:370},
true,
void 0,
_returnCalendarValue);
a14._dateField=a6;
_savedField1879034=a6;
}
}
function _dfgv(a0)
{
if(a0.value!="")
{
try{
var a1=_getDateFieldFormat(a0).getAsObject(a0.value);
return a1;
}
catch(e)
{
}
}
return null;
}
function _getTimePortion(a0)
{
var a1=_dfgv(a0);
if(!a1)
a1=new Date();
var a2=new Date(a1.getFullYear(),
a1.getMonth(),
a1.getDate());
var a3=a1-a2;
a3-=_getTimezoneDiff(a1,a2);
return a3;
}
function _getLocaleTimeZoneDifference2(a0,a1)
{
var a2=a0.getTimezoneOffset()*-1;
var a3=0;
if(a1!=void(0))
a3=(a1-a2)*60*1000;
else if(_uixLocaleTZ!=(void(0)))
a3=(_uixLocaleTZ-a2)*60*1000;
return a3;
}
function _getTimezoneDiff(a0,a1)
{
return(a0.getTimezoneOffset()-a1.getTimezoneOffset())*60000;
}
function _dfGetMidnight(a0)
{
var a1=new Date(a0);
a1.setHours(0);
a1.setMinutes(0);
a1.setSeconds(0);
a1.setMilliseconds(0);
return a1.getTime();
}
function _dfb(a0,a1)
{
_fixDFF(a0);
}
function _dff(a0,a1)
{
_dfa(a0,a1);
}
function _dfa(a0,a1)
{
if(a1!=(void 0))
{
if(window._calActiveDateFields==(void 0))
window._calActiveDateFields=new Object();
if(typeof(a0)=="string")
{
a0=_getElementById(document,a0);
}
window._calActiveDateFields[a1]=a0;
}
}
function _calsd(a0,a1,a2)
{
if(window._calActiveDateFields!=(void 0))
{
var a3=window._calActiveDateFields[a0];
if(a3)
_dfsv(a3,a1,a2);
}
return false;
}
function _updateCal(a0,a1,a2)
{
a1+=('&scrolledValue='+a0.options[a0.selectedIndex].value);
if(a2)
_firePartialChange(a1);
else
document.location.href=a1;
}
function _doCancel()
{
var a0=parent.TrPopupDialog.getInstance();
if(a0)
{
a0.returnValue=(void 0);
parent.TrPopupDialog._returnFromDialog();
}
else
{
top.returnValue=(void 0);
top.close();
}
return false;
}
function _selectDate(a0,a1)
{
var a2=parent.TrPopupDialog.getInstance();
if(a2)
{
a2.returnValue=a0;
a2.serverOffsetInMins=a1;
parent.TrPopupDialog._returnFromDialog();
}
else
{
top.returnValue=a0;
top.serverOffsetInMins=a1;
top._unloadADFDialog(window.event);
top.close();
}
return false;
}
var _DATE_DIALOG;
var _savedField1879034;

function _getDateFieldFormat(a0)
{
var a1=a0.name;
if(a1&&_dfs)
{
var a2=_dfs[a1];
if(_dl)
{
var a3=_dl[a1];
return new TrDateTimeConverter(a2,a3);
}
return new TrDateTimeConverter(a2);
}
return new TrDateTimeConverter();
}
function _fixDFF(a0)
{
var a1=_getDateFieldFormat(a0);
if(a0.value!="")
{
try
{
var a2=a1.getAsObject(a0.value);
if(a2!=null)
a0.value=a1.getAsString(a2);
}
catch(e)
{
}
}
}

var _AD_ERA=null;
function _getADEra()
{
if(_AD_ERA==null)
{
_AD_ERA=new Date(0);
_AD_ERA.setFullYear(1);
}
return _AD_ERA;
}
function _isStrict(
a0,
a1)
{
var a2=["FullYear","Month","Date","Hours","Minutes",
"Seconds","Milliseconds"];
for(var a3=0;a3<a2.length;a3++)
{
var a4="parsed"+a2[a3];
if(a0[a4]!=null&&
a0[a4]!=a1["get"+a2[a3]]())
{
return false;
}
}
return true;
}
function _doClumping(
a0,
a1,
a2,
a3,
a4
)
{
var a5=a0.length;
var a6=false;
var a7=0;
var a8=void 0;
var a9=0;
var a10=null;
for(var a11=0;a11<a5;a11++)
{
var a12=a0.charAt(a11);
if(a6)
{
if(a12=="\'")
{
a6=false;
if(a7!=1&&a9!=a10)
{
a9++;
a7--;
}
if(!a2(a0,
a1,
"\'",
a9,
a7,
a3,
a4))
{
return false;
}
var a13=a11+1;
if(a13<a5)
{
var a14=a0.charAt(a13);
if(a14=="\'")
{
a10=a13;
}
}
a7=0;
a8=void 0;
}
else
{
a7++;
}
}
else
{
if(a12!=a8)
{
if(a7!=0)
{
if(!a2(a0,
a1,
a8,
a9,
a7,
a3,
a4))
{
return false;
}
a7=0;
a8=void 0;
}
if(a12=='\'')
{
a6=true;
}
a9=a11;
a8=a12;
}
a7++;
}
}
if(a7!=0)
{
if(!a2(a0,
a1,
a8,
a9,
a7,
a3,
a4))
{
return false;
}
}
return true;
}
function _subformat(
a0,
a1,
a2,
a3,
a4,
a5,
a6
)
{
var a7=null;
var a8=false;
if((a2>='A')&&(a2<='Z')||
(a2>='a')&&(a2<='z'))
{
switch(a2)
{
case'D':
a7="(Day in Year)";
break;
case'E':
{
var a9=a5.getDay();
a7=(a4<=3)
?a1.getShortWeekdays()[a9]
:a1.getWeekdays()[a9];
}
break;
case'F':
a7="(Day of week in month)";
break;
case'G':
{
var a10=a1.getEras();
a7=(a5.getTime()<_getADEra().getTime())
?a10[0]
:a10[1];
}
break;
case'M':
{
var a11=a5.getMonth();
if(a4<=2)
{
a7=_getPaddedNumber(a11+1,a4);
}
else if(a4==3)
{
a7=a1.getShortMonths()[a11];
}
else
{
a7=a1.getMonths()[a11];
}
}
break;
case'S':
a7=_getPaddedNumber(a5.getMilliseconds(),a4);
break;
case'W':
a7="(Week in Month)";
break;
case'a':
{
var a12=a1.getAmPmStrings();
a7=(_isPM(a5.getHours()))
?a12[1]
:a12[0];
}
break;
case'd':
a7=_getPaddedNumber(a5.getDate(),a4);
break;
case'h':
hours=a5.getHours();
if(_isPM(hours))
hours-=12;
if(hours==0)
hours=12;
a7=_getPaddedNumber(hours,a4);
break;
case'K':
hours=a5.getHours();
if(_isPM(hours))
hours-=12;
a7=_getPaddedNumber(hours,a4);
break;
case'k':
hours=a5.getHours();
if(hours==0)
hours=24;
a7=_getPaddedNumber(hours,a4);
break;
case'H':
a7=_getPaddedNumber(a5.getHours(),a4);
break;
case'm':
a7=_getPaddedNumber(a5.getMinutes(),a4);
break;
case's':
a7=_getPaddedNumber(a5.getSeconds(),a4);
break;
case'w':
a7="(Week in year)";
break;
case'y':
{
var a13=a5.getFullYear();
var a14=(a4<=2)
?a4
:null;
a7=_getPaddedNumber(a13,a4,a14);
}
break;
case'z':
{
a7="GMT";
var a15=_getTimeZoneOffsetString(a5,false);
if(a15)
{
a7+=a15[0];
a7+=":"
a7+=a15[1];
}
}
break;
case'Z':
{
var a15=_getTimeZoneOffsetString(a5,true);
if(a15)
{
a7=a15[0];
a7+=a15[1];
}
else
{
a7="";
}
}
break;
default:
a7="";
}
}
else
{
a7=a0.substring(a3,a3+a4);
}
a6.value+=a7;
return true;
}
function _getTimeZoneOffsetString(a0,a1)
{
var a2=-1*a0.getTimezoneOffset();
a2+=_getLocaleTimeZoneDifference();
if(a1||a2!=0)
{
var a3=new Array(2);
if(a2<0)
{
a3[0]="-";
a2=-a2
}
else
{
a3[0]="+";
}
a3[0]+=_getPaddedNumber(Math.floor(a2/60),2);
a3[1]=_getPaddedNumber(a2%60,2);
return a3;
}
}
function _getLocaleTimeZoneDifference()
{
var a0=new Date();
var a1=a0.getTimezoneOffset()*-1;
var a2=0;
return a2-a1;
}
function _subparse(
a0,
a1,
a2,
a3,
a4,
a5,
a6
)
{
var a7=a5.currIndex;
var a8=(a3+a4<a0.length)?
a0.charAt(a3+a4):null;
var a9=("DFMSWdhkHKmswy".indexOf(a8)!=-1);
if((a2>='A')&&(a2<='Z')||
(a2>='a')&&(a2<='z'))
{
switch(a2)
{
case'D':
if(_accumulateNumber(a5,!a9?3:a4)==null)
{
return false;
}
break;
case'E':
{
var a10=_matchArray(a5,
(a4<=3)
?a1.getShortWeekdays()
:a1.getWeekdays());
if(a10==null)
{
return false;
}
}
break;
case'F':
if(_accumulateNumber(a5,!a9?2:a4)==null)
{
return false;
}
break;
case'G':
{
var a11=_matchArray(a5,a1.getEras());
if(a11!=null)
{
if(a11==0)
{
a5.parsedBC=true;
}
}
else
{
return false;
}
}
break;
case'M':
{
var a12;
var a13=0;
if(a4<=2)
{
a12=_accumulateNumber(a5,!a9?2:a4);
a13=-1;
}
else
{
var a14=(a4==3)
?a1.getShortMonths()
:a1.getMonths();
a12=_matchArray(a5,a14);
}
if(a12!=null)
{
a5.parsedMonth=(a12+a13);
}
else
{
return false;
}
}
break;
case'S':
{
var a15=_accumulateNumber(a5,!a9?3:a4);
if(a15!=null)
{
a5.parsedMilliseconds=a15;
}
else
{
return false;
}
}
break;
case'W':
if(_accumulateNumber(a5,!a9?2:a4)==null)
{
return false;
}
break;
case'a':
{
var a16=_matchArray(a5,
a1.getAmPmStrings());
if(a16==null)
{
return false;
}
else
{
if(a16==1)
{
a5.isPM=true;
}
}
}
break;
case'd':
{
var a17=_accumulateNumber(a5,!a9?2:a4);
if(a17!=null)
{
a5.parsedDate=a17;
}
else
{
return false;
}
}
break;
case'h':
case'k':
case'H':
case'K':
{
var a18=_accumulateNumber(a5,!a9?2:a4);
if(a18!=null)
{
if((a2=='h')&&(a18==12))
a18=0;
if((a2=='k')&&(a18==24))
a18=0;
a5.parsedHour=a18;
}
else
{
return false;
}
}
break;
case'm':
{
var a19=_accumulateNumber(a5,!a9?2:a4);
if(a19!=null)
{
a5.parsedMinutes=a19;
}
else
{
return false;
}
}
break;
case's':
{
var a20=_accumulateNumber(a5,!a9?2:a4);
if(a20!=null)
{
a5.parsedSeconds=a20;
}
else
{
return false;
}
}
break;
case'w':
if(_accumulateNumber(a5,!a9?2:a4)==null)
{
return false;
}
break;
case'y':
{
var a21=_accumulateNumber(a5,!a9?4:a4);
var a22=a5.currIndex-a7;
if(a21!=null)
{
if((a22>2)&&
(a4<=2)&&
(a21<=999))
{
return false;
}
else if((a4<=2)&&(a21>=0)&&(a21<=100))
{
a21=_fix2DYear(a21);
}
else if(a4==4)
{
if(a22==3)
return false;
if(a22<=2)
a21=_fix2DYear(a21);
}
if(a21==0)
return false;
a5.parsedFullYear=a21;
}
else
{
return false;
}
}
break;
case'z':
{
if(!_matchText(a5,"GMT"))
{
return false;
}
if((a5.parseString.length-a5.currIndex)>0)
{
if(_matchArray(a5,["-","+"])==null)
{
return false;
}
var a23=_accumulateNumber(a5,2);
if(a23==null)
{
return false;
}
a5.hourOffset=a23;
if(!_matchText(a5,":"))
{
return false;
}
var a24;
if(((a5.parseString.length-a5.currIndex)<2)||
(a24=_accumulateNumber(a5,2))==null)
{
return false;
}
a5.minOffset=a24;
}
}
break;
case'Z':
{
if((a5.parseString.length-a5.currIndex)<5)
{
return false;
}
if(_matchArray(a5,["-","+"])==null)
{
return false;
}
var a23=_accumulateNumber(a5,2)
if(a23==null)
{
return false;
}
a5.hourOffset=a23;
var a24=_accumulateNumber(a5,2)
if(a24==null)
{
return false;
}
a5.minOffset=null;
}
break;
default:
}
}
else
{
return _matchText(a5,
a0.substring(a3,a3+a4));
}
return true;
}
function _fix2DYear(a0)
{
var a1;
if(_df2DYS!=null)
{
var a2=_df2DYS;
a1=a2-(a2%100);
a0+=a1;
if(a0<a2)
a0+=100;
}
else
{
var a3=new Date().getFullYear();
a1=a3-(a3%100)-100;
a0+=a1;
if(a0+80<a3)
{
a0+=100;
}
}
return a0;
}
function _matchArray(
a0,
a1
)
{
for(var a2=0;a2<a1.length;a2++)
{
if(_matchText(a0,a1[a2]))
{
return a2;
}
}
return null;
}
function _matchText(
a0,
a1
)
{
if(!a1)
return false;
var a2=a1.length;
var a3=a0.currIndex;
var a4=a0.parseString;
if(a2>a4.length-a3)
{
return false;
}
var a5=a4.substring(a3,a3+a2);
var a6=a5.toLowerCase();
var a7=a1.toLowerCase();
if(a6!=a7)
return false;
a0.currIndex+=a2;
return true;
}
function _accumulateNumber(
a0,
a1
)
{
var a2=a0.currIndex;
var a3=a2;
var a4=a0.parseString;
var a5=a4.length;
if(a5>a3+a1)
a5=a3+a1;
var a6=0;
while(a3<a5)
{
var a7=parseDigit(a4.charAt(a3));
if(!isNaN(a7))
{
a6*=10;
a6+=a7;
a3++;
}
else
{
break;
}
}
if(a2!=a3)
{
a0.currIndex=a3;
return a6;
}
else
{
return null;
}
}
function _isPM(
a0
)
{
return(a0>=12);
}
function _getPaddedNumber(
a0,
a1,
a2
)
{
var a3=a0.toString();
if(a1!=null)
{
var a4=a1-a3.length;
while(a4>0)
{
a3="0"+a3;
a4--;
}
}
if(a2!=null)
{
var a5=a3.length-a2;
if(a5>0)
{
a3=a3.substring(a5,
a5+a2);
}
}
return a3;
}
var _CONVENIENCE_PATTERNS=null;
function TrDateTimeConverter(
a0,
a1,
a2,
a3,
a4
)
{
this._class="TrDateTimeConverter";
this._exampleString=a2;
this._type=a3;
this._messages=a4;
this._offset=null;
this._localeSymbols=getLocaleSymbols(a1);
if(a0==null)
a0=this._localeSymbols.getShortDatePatternString();
var a5=this._initPatterns(a0,a1);
this._pattern=a5;
}
TrDateTimeConverter.prototype=new TrConverter();
TrDateTimeConverter.prototype.getFormatHint=function()
{
if(this._messages&&this._messages["hint"])
{
return TrMessageFactory.createCustomMessage(
this._messages["hint"],
""+this._exampleString);
}
else
{
var a6="org.apache.myfaces.trinidad.convert.DateTimeConverter."+this._type+"_HINT";
return TrMessageFactory.createMessage(
a6,
""+this._exampleString);
}
}
TrDateTimeConverter.prototype.getAsString=function(
a7
)
{
if(this._offset)
{
var a8=a7.getMinutes();
a7.setMinutes((+a8)-parseInt(this._offset));
}
var a9=new Object();
a9.value="";
var a10=this._pattern;
if(typeof a10!="string")
a10=a10[0];
_doClumping(a10,
this._localeSymbols,
_subformat,
a7,
a9);
if(this._offset)
{
var a11=(((this._offset+a7.getTimezoneOffset())*-1)/60);
if(parseInt(a11)>0)
{
a9.value=a9.value+"+"
}
a9.value=a9.value+a11+":00";
}
return a9.value;
}
TrDateTimeConverter.prototype.setDiffInMins=function(
a12
)
{
this._offset=a12;
}
TrDateTimeConverter.prototype.getDiffInMins=function()
{
return this._offset;
}
TrDateTimeConverter.prototype.getLocaleSymbols=function()
{
return this._localeSymbols;
}
TrDateTimeConverter.prototype.getAsObject=function(
a13,
a14
)
{
if(a13==null)
return null;
a13=TrUIUtils.trim(a13);
if(a13.length==0)
return null;
var a15=this._pattern;
var a16;
var a17="org.apache.myfaces.trinidad.convert.DateTimeConverter.CONVERT_"+this._type;
if(this._messages&&this._messages["detail"])
{
a16=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a17),
this._messages["detail"],
a14,
a13,
this._exampleString);
}
else
{
a16=_createFacesMessage(a17,
a14,
a13,
this._exampleString);
}
var a18=_createFacesMessage("org.apache.myfaces.trinidad.convert.DateTimeConverter.CONVERT_DATE_INVALID_DATE",
a14,
a13);
if(typeof a15=="string")
{
return this._simpleDateParseImpl(a13,
a15,
this._localeSymbols,
a16,
a18);
}
else
{
var a19;
for(a19=0;a19<a15.length;a19++)
{
try{
var a20=this._simpleDateParseImpl(a13,
a15[a19],
this._localeSymbols,
a16,
a18);
return a20;
}
catch(e)
{
if(e.isDateInvalid)
throw e;
if(a19==a15.length-1)
throw e;
}
}
}
}
TrDateTimeConverter.prototype._endsWith=function(
a21,
a22
)
{
var a23=a21.length-a22.length;
if(a23<0)
return false;
return(a21.lastIndexOf(a22,a23)==a23);
}
TrDateTimeConverter.prototype._initPatterns=function(
a24,a25)
{
var a26=new Array();
var a27=new Array();
if(a24)
a27=a27.concat(a24);
if(!a25)
a25=getJavaLanguage(a25);
if(!_CONVENIENCE_PATTERNS)
this._initConveniencePatterns();
var a28=_CONVENIENCE_PATTERNS[a25];
if(a28)
a27=a27.concat(a28);
var a29=a27.length;
for(var a30=0;a30<a29;a30++)
{
var a31=a27[a30];
a26[a26.length]=a31;
var a32=1;
if(a31.indexOf('MMM')!=-1)
{
a26[a26.length]=a31.replace(/MMM/g,'MM');
a26[a26.length]=a31.replace(/MMM/g,'M');
a32=3;
}
var a33=a26.length-a32;
if(a31.indexOf('/')!=-1)
{
for(var a34=a33;a34<a33+a32;a34++)
a26[a26.length]=a26[a34].replace(/\//g,'-');
for(var a34=a33;a34<a33+a32;a34++)
a26[a26.length]=a26[a34].replace(/\//g,'.');
}
else if(a31.indexOf('-')!=-1)
{
for(var a34=a33;a34<a33+a32;a34++)
a26[a26.length]=a26[a34].replace(/-/g,'/');
for(var a34=a33;a34<a33+a32;a34++)
a26[a26.length]=a26[a34].replace(/-/g,'.');
}
else if(a31.indexOf('.')!=-1)
{
for(var a34=a33;a34<a33+a32;a34++)
a26[a26.length]=a26[a34].replace(/\./g,'-');
for(var a34=a33;a34<a33+a32;a34++)
a26[a26.length]=a26[a34].replace(/\./g,'/');
}
}
return a26;
}
TrDateTimeConverter.prototype._initConveniencePatterns=function()
{
_CONVENIENCE_PATTERNS=new Object();
_CONVENIENCE_PATTERNS.en_US=["MMMM dd, yy","MMMM/dd/yy","dd-MMMM-yy"];
}
TrDateTimeConverter.prototype._simpleDateParseImpl=function(
a35,
a36,
a37,
a38,
a39)
{
if(this._endsWith(a36," '"))
{
a35+=" ";
}
var a40=new Object();
a40.currIndex=0;
a40.parseString=a35;
a40.parsedHour=null;
a40.parsedMinutes=null;
a40.parsedSeconds=null;
a40.parsedMilliseconds=null;
a40.isPM=false;
a40.parsedBC=false;
a40.parsedFullYear=null;
a40.parsedMonth=null;
a40.parsedDate=null;
a40.hourOffset=null;
a40.minOffset=null;
var a41=new Date(0);
a41.setDate(1);
if(_doClumping(a36,
a37,
_subparse,
a40,
a41))
{
if(a35.length!=a40.currIndex)
{
a40.parseException=new TrConverterException(a38);
throw a40.parseException;
}
if((a40.hourOffset!=null)||
(a40.minOffset!=null))
return undefined;
var a42=a40.parsedFullYear;
if(a42!=null)
{
if(a40.parsedBC)
{
a42=_getADEra().getFullYear()-a42;
}
a41.setFullYear(a42);
a40.parsedFullYear=a42;
}
var a43=a40.parsedMonth;
if(a43!=null)
a41.setMonth(a43);
var a44=a40.parsedDate;
if(a44!=null)
a41.setDate(a44);
var a45=a40.parsedHour;
if(a45!=null)
{
if(a40.isPM&&(a45<12))
{
a45+=12;
}
a41.setHours(a45);
a40.parsedHour=a45;
}
var a46=a40.parsedMinutes;
if(a46!=null)
a41.setMinutes(a46);
var a47=a40.parsedSeconds;
if(a47!=null)
a41.setSeconds(a47);
var a48=a40.parsedMilliseconds;
if(a48!=null)
a41.setMilliseconds(a48);
if(!_isStrict(a40,a41))
{
a40.parseException=new TrConverterException(a39);
a40.parseException.isDateInvalid=true;
throw a40.parseException;
}
if(this._offset)
{
var a49=a41.getMinutes();
a41.setMinutes((+a49)+parseInt(this._offset));
}
return a41;
}
else
{
a40.parseException=new TrConverterException(a38);
throw a40.parseException;
}
}

var _digits;
var _decimalSep;
var _groupingSep;
function isDigit(
a0
)
{
return(_getDigits()[a0]!=null);
}
function _getDigits()
{
if(_digits==null)
{
var a0=[
0x0030,
0x0660,
0x06F0,
0x0966,
0x09E6,
0x0A66,
0x0AE6,
0x0B66,
0x0BE7,
0x0C66,
0x0CE6,
0x0D66,
0x0E50,
0x0ED0,
0x0F20,
0xFF10
];
_digits=new Object();
for(var a1=0;a1<a0.length;a1++)
{
for(var a2=0;a2<10;a2++)
{
var a3=String.fromCharCode(a0[a1]+a2);
_digits[a3]=a2;
}
}
}
return _digits;
}
function parseDigit(
a0
)
{
var a1=_getDigits()[a0];
if(a1==null)
{
return NaN;
}
else
{
return a1;
}
}
function isNotLowerCase()
{
var a0=alphaChar.charCodeAt(0);
if(a0>0xFF)
{
return true;
}
else
{
return!_isLowerCaseStrict(alphaChar);
}
}
function isLowerCase(
a0
)
{
var a1=a0.charCodeAt(0);
if(a1>0xFF)
{
return!isDigit(a0);
}
else
{
return _isLowerCaseStrict(a0);
}
}
function _isLowerCaseStrict(
a0
)
{
var a1=a0.charCodeAt(0);
return(((a1>=0x61)&&(a1<=0x7A))||
((a1>=0xDF)&&(a1<=0xFF)));
}
function isUpperCase(
a0
)
{
var a1=a0.charCodeAt(0);
if(a1>0xFF)
{
return!isDigit(a0);
}
else
{
return _isUpperCaseStrict(a0);
}
}
function isNotUpperCase(
a0
)
{
var a1=a0.charCodeAt(0);
if(a1>0xFF)
{
return true;
}
else
{
return!_isUpperCaseStrict(a0);
}
}
function _isUpperCaseStrict(
a0
)
{
var a1=a0.charCodeAt(0);
return(((a1>=0x41)&&(a1<=0x5A))||
((a1>=0xC0)&&(a1<=0xDe)));
}
function isLetter(
a0
)
{
return isLowerCase(a0)|isUpperCase(a0);
}
function getUserLanguage()
{
var a0=_locale;
if(a0==null)
{
a0=window.navigator.userLanguage;
if(a0==null)
{
a0=window.navigator.language;
}
}
return a0;
}
function getJavaLanguage(
a0
)
{
if(a0==null)
{
a0=getUserLanguage();
}
var a1=a0.indexOf("-",0);
if(a1==-1)
return a0;
var a2=a0.length;
var a3=a0.substring(0,a1);
a3+="_";
a1++;
var a4=a0.indexOf("-",a1);
if(a4==-1)
{
a4=a2;
}
var a5=a0.substring(a1,
a4);
a3+=a5.toUpperCase();
if(a4!=a2)
{
a3+="_";
a3+=a0.substring(a4+1,
a2);
}
return a3;
}
function getLocaleSymbols(
a0
)
{
var a1=getJavaLanguage(a0);
while(true)
{
var a2=window["LocaleSymbols_"+a1];
if(a2!=null)
{
return a2;
}
else
{
var a3=a1.lastIndexOf("_");
if(a3!=-1)
{
a1=a1.substring(0,a3);
}
else
{
break;
}
}
}
}
function _getEras()
{
return this.getLocaleElements()["Eras"];
}
function _getMonths()
{
return this.getLocaleElements()["MonthNames"];
}
function _getShortMonths()
{
return this.getLocaleElements()["MonthAbbreviations"];
}
function _getWeekdays()
{
return this.getLocaleElements()["DayNames"];
}
function _getShortWeekdays()
{
return this.getLocaleElements()["DayAbbreviations"];
}
function _getAmPmStrings()
{
return this.getLocaleElements()["AmPmMarkers"];
}
function _getZoneStrings()
{
return this.getLocaleElements()["zoneStrings"];
}
function _getLocalPatternChars()
{
return this.getLocaleElements()["localPatternChars"];
}
function _getDecimalSeparator()
{
if(_decimalSep!=null)
return _decimalSep;
return this.getLocaleElements()["NumberElements"][0];
}
function _getGroupingSeparator()
{
if(_groupingSep!=null)
return _groupingSep;
return this.getLocaleElements()["NumberElements"][1];
}
function _getPatternSeparator()
{
return this.getLocaleElements()["NumberElements"][2];
}
function _getPercent()
{
return this.getLocaleElements()["NumberElements"][3];
}
function _getPercentSuffix()
{
return this.getLocaleElements()["PercentElements"][0];
}
function _getZeroDigit()
{
return this.getLocaleElements()["NumberElements"][4];
}
function _getDigit()
{
return this.getLocaleElements()["NumberElements"][5];
}
function _getMinusSign()
{
return this.getLocaleElements()["NumberElements"][6];
}
function _getExponential()
{
return this.getLocaleElements()["NumberElements"][7];
}
function _getPerMill()
{
return this.getLocaleElements()["NumberElements"][8];
}
function _getInfinity()
{
return this.getLocaleElements()["NumberElements"][9];
}
function _getNaN()
{
return this.getLocaleElements()["NumberElements"][10];
}
function _getCurrencySymbol()
{
return this.getLocaleElements()["CurrencyElements"][0];
}
function _getCurrencyCode()
{
return this.getLocaleElements()["CurrencyElements"][1];
}
function _getPositivePrefix()
{
return this.getLocaleElements()["CurrencyElements"][2];
}
function _getPositiveSuffix()
{
return this.getLocaleElements()["CurrencyElements"][3];
}
function _getNegativePrefix()
{
return this.getLocaleElements()["CurrencyElements"][4];
}
function _getNegativeSuffix()
{
return this.getLocaleElements()["CurrencyElements"][5];
}
function _getLocaleElements()
{
return this["LocaleElements"];
}
function _getFullTimePatternString()
{
return this.getLocaleElements()["DateTimePatterns"][0];
}
function _getLongTimePatternString()
{
return this.getLocaleElements()["DateTimePatterns"][1];
}
function _getMediumTimePatternString()
{
return this.getLocaleElements()["DateTimePatterns"][2];
}
function _getShortTimePatternString()
{
return this.getLocaleElements()["DateTimePatterns"][3];
}
function _getFullDatePatternString()
{
return this.getLocaleElements()["DateTimePatterns"][4];
}
function _getLongDatePatternString()
{
return this.getLocaleElements()["DateTimePatterns"][5];
}
function _getMediumDatePatternString()
{
return this.getLocaleElements()["DateTimePatterns"][6];
}
function _getShortDatePatternString()
{
return this.getLocaleElements()["DateTimePatterns"][7];
}
function _getDateTimeFormatString()
{
return this.getLocaleElements()["DateTimePatterns"][8];
}
function LocaleSymbols(
a0
)
{
this["LocaleElements"]=a0;
}
LocaleSymbols.prototype.getFullTimePatternString=_getFullTimePatternString;
LocaleSymbols.prototype.getLongTimePatternString=_getLongTimePatternString;
LocaleSymbols.prototype.getMediumTimePatternString=_getMediumTimePatternString;
LocaleSymbols.prototype.getShortTimePatternString=_getShortTimePatternString;
LocaleSymbols.prototype.getFullDatePatternString=_getFullDatePatternString;
LocaleSymbols.prototype.getLongDatePatternString=_getLongDatePatternString;
LocaleSymbols.prototype.getMediumDatePatternString=_getMediumDatePatternString;
LocaleSymbols.prototype.getShortDatePatternString=_getShortDatePatternString;
LocaleSymbols.prototype.getDateTimeFormatString=_getDateTimeFormatString;
LocaleSymbols.prototype.getEras=_getEras;
LocaleSymbols.prototype.getMonths=_getMonths;
LocaleSymbols.prototype.getShortMonths=_getShortMonths;
LocaleSymbols.prototype.getWeekdays=_getWeekdays;
LocaleSymbols.prototype.getShortWeekdays=_getShortWeekdays;
LocaleSymbols.prototype.getAmPmStrings=_getAmPmStrings;
LocaleSymbols.prototype.getZoneStrings=_getZoneStrings;
LocaleSymbols.prototype.getLocalPatternChars=_getLocalPatternChars;
LocaleSymbols.prototype.getDecimalSeparator=_getDecimalSeparator;
LocaleSymbols.prototype.getGroupingSeparator=_getGroupingSeparator;
LocaleSymbols.prototype.getPatternSeparator=_getPatternSeparator;
LocaleSymbols.prototype.getPercent=_getPercent;
LocaleSymbols.prototype.getPercentSuffix=_getPercentSuffix;
LocaleSymbols.prototype.getZeroDigit=_getZeroDigit;
LocaleSymbols.prototype.getDigit=_getDigit;
LocaleSymbols.prototype.getMinusSign=_getMinusSign;
LocaleSymbols.prototype.getExponential=_getExponential;
LocaleSymbols.prototype.getPerMill=_getPerMill;
LocaleSymbols.prototype.getInfinity=_getInfinity;
LocaleSymbols.prototype.getNaN=_getNaN;
LocaleSymbols.prototype.getCurrencySymbol=_getCurrencySymbol;
LocaleSymbols.prototype.getCurrencyCode=_getCurrencyCode;
LocaleSymbols.prototype.getPositivePrefix=_getPositivePrefix;
LocaleSymbols.prototype.getPositiveSuffix=_getPositiveSuffix;
LocaleSymbols.prototype.getNegativePrefix=_getNegativePrefix;
LocaleSymbols.prototype.getNegativeSuffix=_getNegativeSuffix;
LocaleSymbols.prototype.getLocaleElements=_getLocaleElements;
function TrConverterHint()
{
this._class="TrConverterHint";
}
TrConverterHint.prototype.getFormatHint=function(){}
function TrValidatorHint()
{
this._class="TrValidatorHint";
}
TrConverterHint.prototype.getHints=function(a0){}
function TrConverter()
{
this._class="TrConverter";
}
TrConverter.prototype.getAsString=function(a0,a1){}
TrConverter.prototype.getAsObject=function(a2,a3){}
function TrValidator()
{
this._class="TrValidator";
}
TrValidator.prototype.validate=function(a0,a1,a2){}
function TrConverterException(
a0,
a1,
a2
)
{
if(a0==null)
{
this._facesMessage=new TrFacesMessage(a1,
a2,
TrFacesMessage.SEVERITY_ERROR);
}
else
{
this._facesMessage=a0;
}
}
TrConverterException.prototype.getFacesMessage=
function()
{
return this._facesMessage;
}
function TrValidatorException(
a0,
a1,
a2
)
{
if(a0==null)
{
this._facesMessage=new TrFacesMessage(a1,
a2,
TrFacesMessage.SEVERITY_ERROR);
}
else
{
this._facesMessage=a0;
}
}
TrValidatorException.prototype.getFacesMessage=
function()
{
return this._facesMessage;
}
function TrFacesMessage(
a0,
a1,
a2
)
{
this._summary=a0;
this._detail=a1;
if(a2==null)
{
this._severity=TrFacesMessage.SEVERITY_INFO;
}
else
{
this._severity=a2;
}
}
TrFacesMessage.SEVERITY_INFO=0;
TrFacesMessage.SEVERITY_WARN=1;
TrFacesMessage.SEVERITY_ERROR=2;
TrFacesMessage.SEVERITY_FATAL=3;
TrFacesMessage._SEVERITY_DEFAULT=TrFacesMessage.SEVERITY_INFO;
TrFacesMessage.prototype.getDetail=
function()
{
return this._detail;
}
TrFacesMessage.prototype.getSummary=
function()
{
return this._summary;
}
TrFacesMessage.prototype.setDetail=
function(
a3
)
{
this._detail=a3;
}
TrFacesMessage.prototype.setSummary=
function(
a4
)
{
this._summary=a4;
}
TrFacesMessage.prototype.getSeverity=
function()
{
return this._severity;
}
TrFacesMessage.prototype.setSeverity=
function(
a5
)
{
this._severity=a5;
}
var TrFastMessageFormatUtils=new Object();
TrFastMessageFormatUtils.format=function(
a6,
a7
)
{
var a8=a6.length;
var a9=arguments.length-1;
var a10=[];
var a11=0;
for(var a12=0;a12<a8;a12++)
{
var a13=a6.charAt(a12);
if(a13=='{')
{
if(a12+2<a8&&a6.charAt(a12+2)=='}')
{
var a14=a6.charAt(a12+1)-'0';
if(a14>=0&&a14<a9)
{
var a15=a6.substring(a11,a12);
a10.push(a15);
var a16=arguments[a14+1];
if(a16!=null)
a10.push(a16);
a12+=2;
a11=a12+1;
}
}
}
}
if(a11<a8)
{
var a15=a6.substring(a11);
a10.push(a15);
}
return a10.join("");
}
var TrMessageFactory=new Object();
TrMessageFactory.createFacesMessage=function(
a17,
a18,
a19,
a20
)
{
var a21=TrMessageFactory.getSummaryString(a17);
var a22=a18;
var a23=a20;
if(a23==null)
{
a23=TrFacesMessage.SEVERITY_ERROR
}
if(a22==null)
{
a22=TrMessageFactory.getDetailString(a17);
}
if(a22!=null)
{
if(a19!=null)
{
a22=TrFastMessageFormatUtils.format(a22,a19);
}
}
return new TrFacesMessage(a21,a22,a23);
}
TrMessageFactory.getSummaryString=function(
a24
)
{
if(a24==null)
return null;
return TrMessageFactory._TRANSLATIONS[a24];
}
TrMessageFactory.getDetailString=function(
a25
)
{
if(a25==null)
return null;
return TrMessageFactory._TRANSLATIONS[a25+"_detail"];
}
TrMessageFactory.getString=function(
a26
)
{
return TrMessageFactory.getSummaryString(a26);
}
TrMessageFactory.createMessage=function(
a27,
a28,
a29
)
{
var a30=TrMessageFactory.getSummaryString(a27);
if(a30!=null)
{
a30=TrFastMessageFormatUtils.format(a30,a28,a29);
}
return a30;
}
TrMessageFactory.createCustomMessage=function(
a31,
a32,
a33
)
{
var a34;
if(a31!=null)
{
a34=TrFastMessageFormatUtils.format(a31,a32,a33);
}
return a34;
}

TrMessageBox._registerMessageBox=function(a0)
{
if(!TrMessageBox._MESSAGE_BOX)
TrMessageBox._MESSAGE_BOX=new TrMessageBox(a0);
}
TrMessageBox.addMessage=function(a1,a2,a3)
{
var a4=TrMessageBox._MESSAGE_BOX;
if(!a4)
return;
a4.addMessage(a1,a2,a3);
}
TrMessageBox.removeMessages=function(a5)
{
var a6=TrMessageBox._MESSAGE_BOX;
if(!a6)
return;
a6.removeMessages(a5);
}
TrMessageBox.isPresent=function()
{
return(TrMessageBox._MESSAGE_BOX)?true:false;
}
function TrMessageBox(a0)
{
if(a0==undefined)
return;
this._messageBoxId=a0;
TrMessageBox._LINK_STYLE=TrPage.getInstance().getStyleClass("OraLink");
TrMessageBox._LIST_STYLE=TrPage.getInstance().getStyleClass("af|messages::list");
TrMessageBox._LIST_SINGLE_STYLE=TrPage.getInstance().getStyleClass("af|messages::list-single");
}
TrMessageBox.prototype.addMessage=function(a1,a2,a3)
{
var a4=this._getMessageList();
var a5=document.createElement("li");
if(a1)
{
if(!a2)
a2=a3.getSummary();
var a6;
if(a2&&a2.length>0)
{
var a7=document.createElement("a");
a7.className=TrMessageBox._LINK_STYLE;
a7.href="#"+a1;
a7.innerHTML=a2;
a5.appendChild(a7);
a6=document.createTextNode(" - "+a3.getSummary());
}
else
{
a6=document.createTextNode(a3.getSummary());
}
a5.name=this._getMessageNameForInput(a1);
a5.appendChild(a6);
}
else
{
var a8=a3.getSummary();
var a6;
if(a8&&a8.length>0)
a6=document.createTextNode(a8+" - "+a3.getDetail());
else
a6=document.createTextNode(a3.getDetail());
a5.appendChild(a6);
}
a4.appendChild(a5);
if(a4.hasChildNodes())
{
var a9=a4.getElementsByTagName("li");
if(a9.length==1)
a4.className=TrMessageBox._LIST_SINGLE_STYLE;
else
a4.className=TrMessageBox._LIST_STYLE;
}
this._showMessageBox();
}
TrMessageBox.prototype.removeMessages=function(a10)
{
var a11=this._getMessageList();
if(!a11||!a11.hasChildNodes())
return;
var a12=this._getMessageNameForInput(a10);
var a13=a11.getElementsByTagName("li");
for(var a14=0;a14<a13.length;)
{
var a15=a13[a14];
if(a15.name&&a15.name==a12)
{
a11.removeChild(a15);
continue;
}
a14++;
}
if(a13.length==0)
this._hideMessageBox();
else if(a13.length==1)
a11.className=TrMessageBox._LIST_SINGLE_STYLE;
else
a11.className=TrMessageBox._LIST_STYLE;
}
TrMessageBox.prototype._getMessageBox=function()
{
if(this._messageBoxId==null)
return null;
return _getElementById(document,this._messageBoxId);
}
TrMessageBox.prototype._getMessageList=function()
{
if(this._messageBoxId==null)
return null;
return _getElementById(document,this._messageBoxId+"__LIST__");
}
TrMessageBox.prototype._showMessageBox=function()
{
var a16=this._getMessageBox();
if(!a16)
return;
a16.style.display="";
}
TrMessageBox.prototype._hideMessageBox=function()
{
var a17=this._getMessageBox();
if(!a17)
return;
a17.style.display="none";
}
TrMessageBox.prototype._getMessageNameForInput=function(a18)
{
if(!this._messageBoxId||!a18)
return null;
return this._messageBoxId+"__"+a18+"__";
}

var _pprBackRestoreInlineScripts=false;
var _pprBlocking=false;
var _blockOnEverySubmit=false;
var _pprFirstClickPass=false;
var _pprdivElementName='tr_pprBlockingDiv';
var _pprLibStore;
var _pprBlockStartTime=0;
var _pprBlockingTimeout=null;
var _pprEventElement=null;
var _pprSavedCursorFlag=false;
var _pprChoiceChanged=false;
var _agent=new Object();
var _lastDateSubmitted;
var _lastDateReset=0;
var _lastDateValidated=0;
var _lastValidationFailure=0;
var _delayedEventParams=new Object();
var _initialFocusID=null;
var _TrFocusRequestDoc=null;
var _TrFocusRequestID=null;
var _TrFocusRequestNext=false;
var _TrEventBasedValidation=false;
var _blockCheckUnloadFromDialog=false;
var _saveForm=null;
var _saveDoValidate=null;
var _saveParameters=null;
var _submitRejected=false;
var _inPartialSubmit=false;
var _pendingRadioButton=false;
var _IE_MOUSE_CAPTURE_EVENTS=[
"onclick",
"ondblclick",
"onmousedown",
"onmousemove",
"onmouseout",
"onmouseover",
"onmouseup"
];
var _GECKO_MOUSE_CAPTURE_EVENTS=[
"click",
"mousedown",
"mouseup",
"mouseover",
"mousemove",
"mouseout",
"contextmenu"
];
function _atLeast(
a0,
a1
)
{
return(!a0||(a0==_agent.kind))&&
(!a1||(a1<=_agent.version));
}
function _atMost(
a0,
a1
)
{
return(a0==_agent.kind)&&(a1>=_agent.version);
}
function _supportsDOM()
{
var a0=false;
if(_agent.isIE)
{
a0=_agent.version>=5.5;
}
else if(_agent.isNav)
{
a0=false;
}
else if(_agent.isGecko||_agent.isSafari||_agent.isOpera)
{
a0=true;
}
else if(_agent.isBlackBerry)
{
a0=false;
a0=_agent.version>=4.6;
}
return a0;
}
function _agentInit()
{
var a0=navigator.userAgent.toLowerCase();
var a1=parseFloat(navigator.appVersion);
var a2=false;
var a3=false;
var a4=false;
var a5=false;
var a6=false;
var a7=false;
var a8=false;
var a9=false;
var a10=false;
var a11=false;
var a12=false;
var a13=false;
var a14="unknown";
var a15=false;
var a16=false;
var a17=true;
var a18=true;
var a19=true;
var a20=true;
if(a0.indexOf("msie")!=-1)
{
var a21=a0.match(/msie (.*);/);
a1=parseFloat(a21[1]);
a15=true;
if(a0.indexOf("windows ce")!=-1)
{
a19=false;
a18=false;
a20=false;
if(a0.indexOf("ppc")!=-1&&
a1>=4.0)
{
a8=true;
a16=true;
a14="pie";
}
else
{
a12=true;
a14="iemobile";
a17=false;
}
}
else
{
a4=true;
a14="ie";
}
}
else if(a0.indexOf("opera")!=-1)
{
a7=true;
a14="opera";
}
else if((a0.indexOf("applewebkit")!=-1)||
(a0.indexOf("safari")!=-1))
{
a9=true
a14="safari";
}
else if(a0.indexOf("gecko/")!=-1)
{
a3=true;
a14="gecko";
a1=1.0;
}
else if(a0.indexOf("blackberry")!=-1)
{
a2=true;
a14="blackberry";
a17=false;
}
else if((a0.indexOf('mozilla')!=-1)&&
(a0.indexOf('spoofer')==-1)&&
(a0.indexOf('compatible')==-1))
{
if(a1>=5.0)
{
a3=true;
a14="gecko";
a1=1.0;
}
else
{
a6=true;
a14="nn";
}
}
if(a0.indexOf('win')!=-1)
{
a11=true;
}
else if(a0.indexOf('mac')!=-1)
{
a5=true;
}
else if(a0.indexOf('sunos')!=-1)
{
a10=true;
}
else if((a0.indexOf('symbian')!=-1)||
(a0.indexOf('nokia')!=-1))
{
a13=true;
a16=true;
}
_agent.isBlackBerry=a2;
_agent.isGecko=a3;
_agent.isIE=a4;
_agent.isIEGroup=a15;
_agent.isMac=a5;
_agent.isNav=a6;
_agent.isNokiaPhone=a13;
_agent.isOpera=a7;
_agent.isPIE=a8;
_agent.isSafari=a9;
_agent.isSolaris=a10;
_agent.isWindows=a11;
_agent.isWindowsMobile6=a12;
_agent.kind=a14;
_agent.pprUnsupported=a16;
_agent.useJsfAjax=a17;
_agent.supportsDomDocument=a18;
_agent.supportsNodeType=a19;
_agent.supportsValidation=a20;
_agent.version=a1;
_agent.atLeast=_atLeast;
_agent.atMost=_atMost;
}
_agentInit();
var _ieFeatures=
{
channelmode:1,
copyhistory:1,
directories:1,
fullscreen:1,
height:1,
location:1,
menubar:1,
resizable:1,
scrollbars:1,
status:1,
titlebar:1,
toolbar:1,
width:1
};
var _nnFeatures=
{
alwayslowered:1,
alwaysraised:1,
copyhistory:1,
dependent:1,
directories:1,
height:1,
hotkeys:1,
innerheight:1,
innerwidth:1,
location:1,
menubar:1,
outerwidth:1,
outerheight:1,
resizable:1,
scrollbars:1,
status:1,
titlebar:1,
toolbar:1,
width:1,
"z-lock":1
}
var _modelessFeatureOverrides=
{
};
var _modalFeatureOverrides=
{
};
var _featureDefaults=
{
document:
{
channelmode:false,
copyhistory:true,
dependent:false,
directories:true,
fullscreen:false,
hotkeys:false,
location:true,
menubar:true,
resizable:true,
scrollbars:true,
status:true,
toolbar:true
},
dialog:
{
channelmode:false,
copyhistory:false,
dependent:true,
directories:false,
fullscreen:false,
hotkeys:true,
location:false,
menubar:false,
resizable:true,
scrollbars:true,
status:true
}
}
var _signedFeatures=
{
alwayslowered:1,
alwaysraised:1,
titlebar:1,
"z-lock":1
};
var _booleanFeatures=
{
alwayslowered:1,
alwaysraised:1,
channelmode:1,
copyhistory:1,
dependent:1,
directories:1,
fullscreen:1,
hotkeys:1,
location:1,
menubar:1,
resizable:1,
scrollbars:1,
status:1,
titlebar:1,
toolbar:1,
"z-lock":1
};
function _addEvent(a0,a1,a2)
{
if(a0.addEventListener)
{
a0.addEventListener(a1,a2,false);
return true;
}
else if(a0.attachEvent)
{
var a3=a0.attachEvent("on"+a1,a2);
return a3;
}
else
{
return false;
}
}
function _removeEvent(a0,a1,a2)
{
if(a0.removeEventListener)
{
a0.removeEventListener(a1,a2,false);
return true;
}
else if(a0.detachEvent)
{
var a3=a0.detachEvent("on"+a1,a2);
return a3;
}
else
{
return false;
}
}
function _getBodyWidth(
a0,
a1,
a2
)
{
var a3=_getContentWidth(a0,a1,0);
var a4=10;
if(_isLTR()||(a2<=5))
{
a4=2*a2;
}
return a3+a4;
}
function _getContentWidth(
a0,
a1,
a2
)
{
var a3=a0.childNodes;
var a4=_agent.isIE;
var a5=(a4)
?"canHaveHTML"
:"tagName";
var a6=0;
for(var a7=0;a7<a3.length;a7++)
{
var a8=a3[a7];
if(a8[a5]&&(a8.offsetWidth>0))
{
var a9=0;
var a10=a8["offsetWidth"];
if(!a4)
{
if((a10==a1)||
(a10<=1))
{
var a11=a8.offsetLeft;
if(a8.parentNode!=a8.offsetParent)
{
a11=a11-
(a8.parentNode.offsetLeft);
}
a9=_getContentWidth(a8,
a10,
a11);
}
else
{
a9=a10;
}
}
else
{
a9=a8["clientWidth"];
if(a9==0)
{
var a11=a8.offsetLeft;
if(a8.parentElement!=a8.offsetParent)
{
a11=a11-
(a8.parentElement.offsetLeft);
}
a9=_getContentWidth(a8,
a10,
a11);
}
}
if(a9>a6)
{
a6=a9;
}
}
}
if(a6==0)
a6=a1;
return a6+a2;
}
function _getParentWindow(a0)
{
var a1=a0.parent;
try
{
a1.name;
return a1;
}
catch(e)
{
return undefined;
}
}
function _getTop(a0)
{
var a1=_getParentWindow(a0);
while(a1&&(a1!=a0))
{
a0=a1;
a1=_getParentWindow(a0);
}
return a0;
}
function t(a0,a1)
{
if(_tURL)
{
document.write('<img src="'+_tURL+'"');
if(a0)
document.write(' width="'+a0+'"');
if(a1)
document.write(' height="'+a1+'"');
if(_axm)
document.write(' alt=""');
document.write('>');
}
}
function _getDependents(
a0,
a1
)
{
var a2;
if(a0)
{
a2=a0["_dependents"];
if(!a2)
{
if(a1)
{
a2=new Object();
a0["_dependents"]=a2;
}
}
}
return a2;
}
function _getDependent(
a0,
a1
)
{
var a2=_getDependents(a0);
var a3;
if(a2)
{
a3=a2[a1];
}
return a3;
}
function _setDependent(
a0,
a1,
a2
)
{
var a3=_getDependents(a0,true);
if(a3)
{
a3[a1]=a2;
}
}
function _getModalDependent(
a0
)
{
return _getDependent(a0,"modalWindow");
}
function _isModalDependent(
a0,
a1
)
{
return(a1==_getModalDependent(a0));
}
function _unloadADFDialog(
a0
)
{
_blockCheckUnloadFromDialog=false;
_checkUnload(a0);
_blockCheckUnloadFromDialog=true;
}
function _checkUnload(
a0
)
{
a0=_getEventObj();
if(_blockCheckUnloadFromDialog)
{
_blockCheckUnloadFromDialog=false;
return;
}
if(_isModalAbandoned())
return;
var a1=_getModalDependent(window);
if(a1!=null)
{
_setModalAbandoned(a1);
a1.close();
}
var a2=_getTop(self);
if(!a2)
return;
var a3=a2["opener"];
if(!a3)
return;
var a4=_getDependent(a3,self.name);
if(_isModalDependent(a3,self))
{
_setDependent(a3,"modalWindow",(void 0));
a3.onfocus=null;
if(_agent.supportsDomDocument)
{
var a5=a3.document.body;
if(_agent.atLeast("ie",4))
{
if(_agent.atLeast("ie",5)&&_agent.isWindows)
{
a5.onlosecapture=null;
_removeModalCaptureIE(a5);
}
a5.style.filter=null;
}
if(_agent.isGecko)
{
if(a5!=(void 0))
{
_removeModalCaptureGecko(a3,a5);
}
}
}
}
if(a4!=(void 0))
{
_setDependent(a3,self.name,(void 0));
if(a0==(void 0))
a0=self.event;
a4(a2,a0);
}
}
function _addModalCaptureIE(a0)
{
var a1=new Object();
var a2=_IE_MOUSE_CAPTURE_EVENTS;
var a3=a2.length;
for(var a4=0;a4<a3;a4++)
{
var a5=a2[a4];
a1[a5]=a0[a5];
a0[a5]=_captureEventIE;
}
window._modalSavedListeners=a1;
window._trIeCapture=a0;
window._trIeCaptureCurrent=true;
a0.setCapture();
}
function _removeModalCaptureIE(a0)
{
a0.releaseCapture();
var a1=window._modalSavedListeners;
if(a1)
{
var a2=_IE_MOUSE_CAPTURE_EVENTS;
var a3=a2.length;
for(var a4=0;a4<a3;a4++)
{
var a5=a2[a4];
a0[a5]=a1[a5];
}
window._modalSavedListeners=null;
}
window._trIeCapture=undefined;
}
function _captureEventIE()
{
var a0=window.event;
if(a0.screenY>=window.screenTop&&a0.screenX>=window.screenLeft)
{
if(!window._trIeCaptureCurrent&&window._trIeCapture)
{
window._trIeCaptureCurrent=true;
window._trIeCapture.setCapture();
}
a0.cancelBubble=true;
}
else if(window._trIeCapture)
{
window._trIeCaptureCurrent=false;
window._trIeCapture.releaseCapture();
}
}
function _addModalCaptureGecko(a0)
{
var a1=_GECKO_MOUSE_CAPTURE_EVENTS;
var a2=a1.length;
for(var a3=0;a3<a2;a3++)
{
var a4=a1[a3];
a0.addEventListener(a4,_captureEventGecko,true);
}
}
function _removeModalCaptureGecko(a0,a1)
{
var a2=_GECKO_MOUSE_CAPTURE_EVENTS;
var a3=a2.length;
for(var a4=0;a4<a3;a4++)
{
var a5=a2[a4];
a1.removeEventListener(a5,
a0._captureEventGecko,
true);
}
}
function _captureEventGecko(
a0
)
{
a0.stopPropagation();
window.preventDefault=true;
}
function _isModalAbandoned()
{
var a0=_getTop(self);
return a0._abandoned;
}
function _setModalAbandoned(
a0
)
{
a0._abandoned=true;
}
function _getKeyValueString(
a0,
a1,
a2
)
{
var a3=a0[a1];
if(typeof(a3)=="function")
{
a3="[function]";
}
var a4=(_agent.isGecko)
?((a2+1)%3==0)
?'\n'
:'    '
:'\t';
return a1+':'+a3+a4;
}
function _dumpSuppress(
a0
)
{
_dump(a0,{innerText:1,outerText:1,outerHTML:1,innerHTML:1});
}
function _dump(
a0,
a1,
a2
)
{
var a3="";
if(a0)
{
if(!a2)
{
a2=a0["name"];
}
var a4="return _getKeyValueString(target, key, index);";
if(_agent.atLeast("ie",5)||_agent.isGecko||_agent.isSafari)
a4="try{"+a4+"}catch(e){return '';}";
var a5=new Function("target","key","index",a4);
var a6=0;
var a7=new Array();
for(var a8 in a0)
{
if((!a1||!a1[a8])&&!a8.match(/DOM/))
{
a7[a6]=a8;
a6++;
}
}
a7.sort();
for(var a9=0;a9<a7.length;a9++)
{
a3+=a5(a0,a7[a9],a9);
}
}
else
{
a2="(Undefined)";
}
if(a3=="")
{
a3="No properties";
}
alert(a2+":\n"+a3);
}
function _getJavascriptId(a0)
{
return a0.split(':').join('_');
}
function _getFormName(a0)
{
var a1=a0.name;
if((typeof a1)!='string')
{
if(_agent.isIE)
{
a1=a0.attributes['name'].nodeValue;
}
else
{
a1=a0.getAttribute('name');
}
}
return a1;
}
function _validateForm(
a0,
a1
)
{
if(!_agent.supportsValidation)
{
return true;
}
var a2='_'+_getJavascriptId(_getFormName(a0))+'Validator';
var a3=window[a2];
if(a3)
{
try
{
ret=a3(a0,a1);
}
catch(e)
{
if(_agent.isPIE||_agent.isNokiaPhone||_agent.isBlackBerry)
{
ret=true;
}
else
{
ret=false;
}
}
return ret;
}
return false;
}
function _valField(
formName,
nameInForm
)
{
if(nameInForm)
{
var target=document.forms[formName][nameInForm];
var blurFunc=target.onblur;
if(blurFunc)
{
var valFunc=blurFunc.toString();
var valContents=valFunc.substring(valFunc.indexOf("{")+1,
valFunc.lastIndexOf("}"));
var targetString="document.forms['"+
formName+
"']['"+
nameInForm+
"']";
valContents=valContents.replace(/this/,targetString);
var lastArg=valContents.lastIndexOf(",");
valContents=valContents.substring(0,lastArg)+")";
eval(valContents);
}
}
}
function _validateAlert(
a0,
a1,
a2,
a3,
a4
)
{
if(!a2)
a2=_getValidators(a0);
var a5=_multiValidate(a0,a1,a2);
var a6=true;
var a7=a4+'\n';
for(var a8 in a2)
{
var a9=a5[a8];
if(!a9||a9.length==0)
continue;
var a10=_getFormElement(a0,a8);
if(!a10)
continue;
var a11=a2[a8].label;
for(var a12=0;a12<a9.length;a12=a12+2)
{
if(a6)
{
_setFocus(a10);
a6=false;
}
var a13=a9[a12];
if(_agent.isNokiaPhone)
{
errorString=_getGlobalErrorString(a10,
a3,
a13,
a11);
}
else
{
errorString=_getGlobalErrorString(a10,
a3,
a13.getDetail(),
a11);
}
a7+=errorString+'\n';
}
}
if(a6)
return true;
_recordValidation(true,0);
alert(a7);
_recordValidation(true,0);
return false;
}
function _validateInline(
a0,
a1,
a2
)
{
if(!a2)
a2=_getValidators(a0);
var a3=_multiValidate(a0,a1,a2);
var a4=true;
for(var a5 in a2)
{
var a6=false;
var a7=_getElementById(document,a5+"::icon");
var a8=_getElementById(document,a5+"::msg");
if(a8&&a8.innerHTML!="")
a8.innerHTML="";
TrMessageBox.removeMessages(a5);
var a9=a3[a5];
if(!a9||a9.length==0)
{
if(a8)
a8.style.display="none";
if(a7)
a7.style.display="none";
continue;
}
var a10=_getFormElement(a0,a5);
if(!a10)
continue;
var a11=a2[a5].label;
for(var a12=0;a12<a9.length;a12=a12+2)
{
if(a4)
{
a4=false;
_setFocus(a10);
}
var a13=a9[a12];
if(a8)
{
if(_agent.isNokiaPhone)
{
a8.innerHTML=a13;
}
else
{
a8.innerHTML=a13.getDetail();
}
}
if(!a8&&!TrMessageBox.isPresent())
{
if(_agent.isNokiaPhone)
{
alert("Field Error ["+a5+"] - "+a13);
}
else
{
alert("Field Error ["+a5+"] - "+a13.getDetail());
}
}
TrMessageBox.addMessage(a5,a11,a13);
}
if(a8)
a8.style.display="";
if(a7)
a7.style.display="";
}
return a4;
}
function _validateInput(a0,a1)
{
if(!a0)
return true;
var a2=a0.target||a0.srcElement;
if(!a2||!a2.id)
return true;
var a3=_getForm(a2);
if(!a3)
return true;
var a4=_getValidators(a3);
if(!a4)
return true;
var a5=a2.id;
var a6=a4[a5];
if(!a6&&a2.name)
{
a5=a2.name;
a6=a4[a5];
}
if(!a6)
return true;
var a7=new Object();
a7[a5]=a6;
var a8=_validateInline(a3,null,a7,1,null);
if(a1)
return a8;
}
function _recordValidation(a0,a1)
{
if(!a1)
a1=new Date();
_lastDateValidated=a1;
if(a0)
_lastValidationFailure=a1;
}
function _recentValidation(a0)
{
var a1=false;
var a2=250;
if(_agent.isMac)
{
a2=600;
}
var a3=new Date();
var a4;
a4=a3-_lastValidationFailure;
if((a4>=0)&&(a4<a2))
{
a1=true;
}
else if(!a0)
{
a4=a3-_lastDateValidated;
if((a4>=0)&&(a4<a2))
{
a1=true;
}
}
return a1;
}
function _commandChoice(
a0,
a1
)
{
var a2=document.forms[a0].elements[a1].value;
if(a2==void(0))
a2=(document.forms[a0].elements[a1])[0].value;
var a3=a2.indexOf("#");
if(a3==0)
window.document.location.href=a2.substring(1,a2.length);
else
{
var a4=a2.indexOf("[");
var a5=a2.substring(0,a4);
var a6=a2.substring(a4+1,a4+2)
var a7=parseInt(a6);
submitForm(a0,a7,{source:a5});
}
}
function submitForm(
a0,
a1,
a2,
a3,
a4
)
{
var a5=true;
if(_agent.isIEGroup)
{
a5=false;
for(var a6 in _delayedEventParams)
{
a5=true;
break;
}
}
if(a5)
{
_delayedEventParams=new Object();
_delayedEventParams["reset"]=true;
}
if((typeof a0)=="string")
{
a0=document[a0];
}
else if((typeof a0)=="number")
{
a0=document.forms[a0];
}
if(!a0)
return false;
var a7=window["_"+_getJavascriptId(_getFormName(a0))+"Validator"];
if(a7==(void 0))
{
_saveFormForLaterSubmit(a0,a1,a2);
return false;
}
var a8=new Date();
if(_recentSubmit(a8))
{
if(_pprFirstClickPass&&_pprBlocking)
{
_saveFormForLaterSubmit(a0,a1,a2);
}
return;
}
_submitRejected=false;
_inPartialSubmit=false;
_lastDateSubmitted=a8;
if(a1==(void 0))
a1=true;
var a9=true;
var a10;
if(a2!=null)
a10=a2.source;
else
a10="";
if(a1&&!_validateForm(a0,a10))
a9=false;
var a11=window["_"+_getJavascriptId(_getFormName(a0))+"_Submit"];
if(typeof a11!="undefined"&&a9)
{
var a12=new Function("doValidate",a11);
var a13;
if(_agent.isPIE)
{
a13=a12(a4);
}
else
{
a0._tempFunc=a12;
a13=a0._tempFunc(a1);
a0._tempFunc=(void 0);
}
if(a1&&(a13==false))
{
a9=false;
}
}
if(a9)
{
TrPage.getInstance()._resetHiddenValues(a0);
if(a3&&_supportsPPR())
{
if(_agent.isPIE||_agent.isWindowsMobile6)
{
var a14=new Array(1);
a14['UA-pixels']=a0.elements['uapixels'].value;
TrPage.getInstance().sendPartialFormPost(a0,a2,a14);
}
else
{
TrPage.getInstance().sendPartialFormPost(a0,a2,null,a4);
}
}
else
{
var a15=_supportsDOM();
var a16=new Object();
if(a2)
{
for(var a17 in a2)
{
var a18=a2[a17];
if(a18!=(void 0))
{
var a19=a0.elements[a17];
if(_agent.isPIE)
{
a19.value=a18;
}
else
{
var a20=false;
if(a19&&(typeof(a19)!="string"))
{
if(a19.type=='submit'||a19.type=='button')
{
var a21=document.createElement("input");
a21.type="hidden";
a21.name=a17;
a21.value=a2[a17];
a0.appendChild(a21);
a16[a17]=a21;
a20=true;
}
else
{
a19.value=a18;
}
}
else
{
if(a15)
{
if(!a20)
{
var a21=document.createElement("input");
a21.type="hidden";
a21.name=a17;
a21.value=a2[a17];
a0.appendChild(a21);
a16[a17]=a21;
}
}
}
}
}
}
}
if(_agent.isIE)
_autoCompleteForm(a0);
try
{
a0.submit();
}
catch(e)
{
if(TrPage.getInstance().getRequestQueue()._isMultipartForm(a0))
{
var a22=_createFacesMessage(
'org.apache.myfaces.trinidad.component.core.input.CoreInputFile.INPUT_FILE_ERROR');
if(!TrMessageBox.isPresent())
alert(a22.getDetail());
else
TrMessageBox.addMessage(null,null,a22);
}
else
{
throw e;
}
}
if(_blockOnEverySubmit)
_pprStartBlocking(window);
if(a15)
{
for(var a17 in a16)
a0.removeChild(a16[a17]);
}
}
}
return a9;
}
function _autoCompleteForm(a0)
{
var a1=window.external;
if(a1&&(typeof a1.AutoCompleteSaveForm!="undefined"))
{
try
{
a1.AutoCompleteSaveForm(a0);
}
catch(e)
{
}
}
}
function _submitOnEnter(a0,a1,a2,a3,a4)
{
if(window.event!=null)
a0=window.event;
var a5;
if(a0.srcElement==undefined)
a5=a0.target;
else
a5=a0.srcElement;
if(!a5)return true;
if(a5.tagName=='A')return true;
if((a5.tagName=='INPUT')&&
(a5.type!='submit')&&
(a5.type!='reset'))
{
if(_getKC(a0)==13)
{
if(a2!=null)
{
var a6=new Object();
a6[a2]=a2;
a6['source']=a2;
if(a4!=true)
{
submitForm(a1,a3,a6);
}
else
{
TrPage._autoSubmit(a1,a2,a0,a3,a6);
}
}
return false;
}
}
return true;
}
function _saveFormForLaterSubmit(a0,a1,a2)
{
_saveForm=a0;
_saveDoValidate=a1;
_saveParameters=a2;
_submitRejected=true;
}
function _submitFormCheck()
{
if(_submitRejected)
{
if(_inPartialSubmit)
{
_submitPartialChange(_saveForm,_saveDoValidate,_saveParameters);
_inPartialSubmit=false;
}
else
{
submitForm(_saveForm,_saveDoValidate,_saveParameters);
}
_saveForm=null;
_saveDoValidate=null;
_saveParameters=null;
}
}
function resetForm(
a0
)
{
var a1=false;
if((typeof a0)=="string")
{
a0=document[a0];
}
else if((typeof a0)=="number")
{
a0=document.forms[a0];
}
if(!a0)
return false;
var a1=TrPage.getInstance()._resetForm(a0);
if(a1)
{
window.document.location.reload();
}
else
{
a0.reset();
}
_lastDateReset=new Date();
return a1;
}
function createNameValueString(a0){
var a1="";
try
{
var a2=a0.elements;
for(var a3=0;a3<a2.length;a3++)
{
try
{
var a4=a2[a3];
if(a4.name)
{
if(a4.type=="text"
||a4.type=="password"
||a4.type=="textarea"
||a4.type=="hidden")
{
a1+=(a4.name+"="+escape(a4.value)+"&");
}
else if(a4.type.indexOf("select")!=-1)
{
var a5="";
for(var a6=0;a6<a4.options.length;a6++)
{
if(a4.options[a6].selected==true)
a5+=a4.name+"="
+escape(a4.options[a6].value)+"&";
}
if(!a5)
{
var a7=_getValue(a4);
if(a7)
{
a5+=a4.name+"="+escape(a7)+"&";
}
}
if(a5)
{
a1+=a5;
}
}
else if(a4.type=="checkbox"&&a4.checked)
a1+=(a4.name+"="+escape(a4.value)+"&");
else if(a4.type=="radio"&&a4.checked==true)
a1+=(a4.name+"="+escape(a4.value)+"&");
}
}
catch(e)
{
}
a4=null;
}
}
catch(e)
{
}
return(a1.substring(0,a1.length-1));
}
function _getValue(a0)
{
var a1=a0;
var a2=a0.type;
if(!a2&&a0.length)
{
for(var a3=0;a3<a0.length;a3++)
{
a2=a0[a3].type;
if(a2!=(void 0))
{
a1=a0[a3];
break;
}
}
}
if(a2=="checkbox")
{
if(a0.length)
{
for(var a3=0;a3<a0.length;a3++)
{
if(a0[a3].type=="checkbox"&&
a0[a3].checked)
{
return a0[a3].value;
}
}
}
else
{
return a0.checked;
}
}
else if(a2=="select-multiple")
{
var a4=new Array();
for(var a3=0;a3<a0.length;a3++)
{
if(a0.options[a3].selected)
{
a4[a4.length]=a0.options[a3].value;
}
}
return(a4.length>0)?a4:"";
}
else if(a2.substring(0,6)=="select")
{
a0=a1;
var a5=a0.selectedIndex;
if(a5!=(void 0)&&
a5!=null&&
a5>=0)
{
var a6=a0.options[a5];
var a7=a6.value;
if(!a7)
{
for(var a3=0;a3<a0.options.length;a3++)
{
if(a0.options[a3].value)
return a7;
}
return a6.text;
}
return a7;
}
return"";
}
else if(a2=="radio")
{
if(a0.length)
{
for(var a3=0;a3<a0.length;a3++)
{
if(a0[a3].type=="radio"&&
a0[a3].checked)
{
return a0[a3].value;
}
}
}
else
{
if(a0.checked)
{
return a0.value;
}
}
return"";
}
else
{
return a0.value;
}
}
function _setSelectIndexById(a0,a1)
{
var a2=_getElementById(document,a0);
if(a2!=null)
a2.selectedIndex=a1;
}
function _syncChoiceIndex(a0)
{
var a1=a0.form;
var a2=a0.name;
var a3=a1.elements[a2];
for(i=0;i<a3.length;i++)
{
a3[i].selectedIndex=a0.selectedIndex;
}
}
function _clearPassword(a0,a1)
{
if(window.event!=(void 0))
a1=window.event;
if(a0.value!="******")
return true;
if((a1.keyCode==8)||
((a1.keyCode>=46)&&(a1.keyCode<112)))
a0.value="";
return true;
}
function _setFocus(a0)
{
if(_isShowing(a0))
{
if(a0.focus)
a0.focus();
if((a0.type=="text")
&&(a0.value!=(void 0))
&&(a0.value!=null)
&&(a0.value.length>0))
{
if(true!=_delayedEventParams["reset"])
a0.select();
}
}
}
function _addValidators(a0,a1,a2,a3,a4)
{
var a5=document.forms[a0];
var a6=_getValidators(a5);
if(!a6)
a6=new Object();
for(var a7=0;a7<a1.length;a7+=5)
{
var a8=a1[a7];
var a9=new Object();
if(a1[a7+1])
{
var a10=a1[a7+2];
a9.required=true;
a9.requiredFormat=a4[a10];
}
var a11=a1[a7+3];
if(a11!=null)
{
a9.converter=a2[a11];
}
var a12=a1[a7+4];
if(a12)
{
for(j=0;j<a12.length;j++)
{
a12[j]=a2[a12[j]];
}
a9.validators=a12;
}
var a13=a3[a8];
if(a13)
a9.label=a13;
a6[a8]=a9;
if(_TrEventBasedValidation)
{
var a14=_getElementById(document,a8);
if(a14)
{
_addEvent(a14,"change",_validateInput);
}
}
}
window["_"+_getJavascriptId(_getFormName(a5))+"_Validators"]=a6;
}
function _multiValidate(
form,
source,
validators
)
{
var failureMap=new Object();
var subforms=window[_getFormName(form)+"_SF"];
var ignorePrefixes=new Array();
var foundUsedSubform=false;
var key;
if(source!=(void 0))
{
for(key in subforms)
{
if(source.indexOf(key+":")==0)
{
foundUsedSubform=true;
break;
}
}
for(key in subforms)
{
if(source.indexOf(key+":")!=0)
{
if((foundUsedSubform)||(subforms[key]==1))
ignorePrefixes.push(key+":");
}
}
}
if(validators&&!_recentValidation(true))
{
for(var id in validators)
{
if(_getElementById(document,id)==null)
{
continue;
}
var isIgnored=false;
for(var j=0;j<ignorePrefixes.length;j++)
{
if(id.indexOf(ignorePrefixes[j])==0)
{
isIgnored=true;
break;
}
}
if(isIgnored)
continue;
var currInput=_getFormElement(form,id);
if(!currInput)
continue;
var inputFailures=new Array();
var descriptor=validators[id];
var label=descriptor.label;
var elementType=currInput.type;
if(!elementType&&currInput.length)
{
var firstType=currInput[0].type;
if(firstType!="radio"&&firstType!="checkbox")
{
currInput=currInput[0];
}
}
var value=_getValue(currInput);
var required=descriptor.required;
if(required&&((value=="")||(value==null)))
{
var requiredErrorString=_getErrorString(currInput,label,
descriptor.requiredFormat);
inputFailures[inputFailures.length]=
new TrFacesMessage(requiredErrorString,requiredErrorString);
}
else
{
var converterConstructor=descriptor.converter;
var converterError=false;
if(converterConstructor)
{
if((value!=null)&&
!((typeof value=="string")&&(value=="")))
{
var converter=eval(converterConstructor);
try
{
value=converter.getAsObject(value,label);
}
catch(e)
{
converterError=true;
if(_agent.isPIE||_agent.isNokiaPhone||_agent.isBlackBerry)
{
inputFailures[inputFailures.length]=e.message;
}
else
{
inputFailures[inputFailures.length]=e.getFacesMessage();
}
}
}
}
if(converterError==false)
{
var validatorArray=descriptor.validators;
if(validatorArray)
{
for(var j=0;j<validatorArray.length;j=j+1)
{
if((value!==null)&&
!((typeof value=="string")&&value==""))
{
var validatorConstructor=validatorArray[j];
if(validatorConstructor&&value!==undefined)
{
var validator=eval(validatorConstructor);
try
{
validator.validate(value,label,converter);
}
catch(e)
{
if(_agent.isPIE||_agent.isNokiaPhone||_agent.isBlackBerry)
{
inputFailures[inputFailures.length]=e.message;
}
else
{
inputFailures[inputFailures.length]=e.getFacesMessage();
}
}
}
}
}
}
}
}
if(inputFailures.length>0)
{
failureMap[id]=inputFailures;
}
}
}
return failureMap;
}
function _createFacesMessage(
a0,
a1,
a2,
a3,
a4
)
{
var a5=TrMessageFactory.getSummaryString(a0);
var a6=TrMessageFactory.getDetailString(a0);
if(a6!=null)
{
a6=TrFastMessageFormatUtils.format(a6,a1,a2,a3,a4);
}
return new TrFacesMessage(a5,
a6,
TrFacesMessage.SEVERITY_ERROR);
}
function _createCustomFacesMessage(
a0,
a1,
a2,
a3,
a4,
a5
)
{
if(a1!=null)
{
a1=TrFastMessageFormatUtils.format(a1,a2,a3,a4,a5);
}
return new TrFacesMessage(a0,
a1,
TrFacesMessage.SEVERITY_ERROR);
}
function _getGlobalErrorString(
a0,
a1,
a2,
a3
)
{
var a4=_getForm(a0);
if(a1&&a3!=null)
{
return _formatErrorString(a1,
{
"0":a3,
"1":a2
});
}
return a2;
}
function _isShowing(
a0)
{
if(a0.type=='hidden')
return false;
if(_agent.isIEGroup)
{
var a1=a0;
while(a1!=(void 0))
{
computedStyle=a1.currentStyle;
if((computedStyle!=(void 0))&&
((computedStyle["visibility"]=="hidden")||
(computedStyle["display"]=="none")))
{
return false;
}
a1=a1.parentNode;
}
return true;
}
if(_agent.isGecko||_agent.isSafari||_agent.BlackBerry)
{
if(!a0.ownerDocument&&a0.length)
a0=a0[0];
var a2=a0.ownerDocument.defaultView.getComputedStyle(a0,
null);
return((a2["visibility"]!="hidden")&&
(a2["display"]!="none"));
}
return true;
}
function _getID(
a0
)
{
if(_agent.isPIE)
{
return a0.name;
}
var a1=a0.id;
var a2=a0.type;
if(!a2&&a0.length)
a2=a0[0].type;
if(a2=="radio")
{
var a3;
if(a0.length)
{
a3=a0[0].parentNode;
if(a3.tagName=='FIELDSET')
a3=a3.parentNode;
}
else
{
a3=a0.parentNode;
}
a1=a3.id;
}
return a1;
}
function _getForm(
a0
)
{
var a1=a0.form;
if(a1==(void 0))
{
if(a0.length)
{
a1=a0[0].form;
}
}
return a1;
}
function _getFormElement(
a0,
a1)
{
var a2=null;
if(_agent.isPIE)
{
a2=a0.elements[a1];
}
else
{
a2=a0[a1];
if(a2==undefined)
{
a2=a0.elements[a1+":trailing:items"];
}
}
return a2;
}
function _getName(
a0
)
{
var a1=a0.name;
if(a1==(void 0))
{
var a2=a0.type;
if(!a2&&a0.length)
a2=a0[0].type;
if(a2=="radio"&&a0.length)
{
a1=a0[0].name;
}
}
return a1;
}
function _instanceof(
a0,
a1
)
{
if(a1==(void 0))
return false;
if(a0==(void 0))
return false;
while(typeof(a0)=="object")
{
if(a0.constructor==a1)
return true;
a0=a0.prototype;
}
return false;
}
function _getErrorString(
a0,
a1,
a2,
a3
)
{
var a4;
var a5=_getForm(a0);
var a6=_getValue(a0);
if(_instanceof(a3,window["TrConverterException"]))
{
a4=a3.getFacesMessage().getDetail();
}
else if(_instanceof(a3,window["TrValidatorException"]))
{
a4=a3.getFacesMessage().getDetail();
}
else
{
a4=a2;
}
if(a4)
{
var a7=_formatErrorString(a4,
{
"0":a1,
"1":a6
});
return a7;
}
}
function _getValidators(
a0
)
{
return window["_"+_getJavascriptId(_getFormName(a0))+"_Validators"];
}
function _formatErrorString(
a0,
a1
)
{
var a2=a0;
for(var a3 in a1)
{
var a4=a1[a3];
if(!a4)
{
a4="";
}
if(typeof a4=="string")
{
a4=a4.replace("{","{'");
a4=a4.replace("}","'}");
}
var a5="{"+a3+"}";
a2=a2.replace(new RegExp('%'+a3+'%','g'),
a5);
var a6=a2.indexOf(a5);
if(a4.indexOf&&a4.indexOf(a5)>=0)
{
var a7='';
for(i=0;i<a4.length;i++)
{
a7=a7+'placeHolderString';
}
while(a6>=0)
{
a2=(a2.substring(0,a6)
+a7
+a2.substring(a6+a5.length));
a6=a2.indexOf(a5);
}
a6=a2.indexOf(a7);
while(a6>=0)
{
a2=(a2.substring(0,a6)
+a4
+a2.substring(a6+a7.length));
a6=a2.indexOf(a7);
}
}
else
while(a6>=0)
{
a2=(a2.substring(0,a6)
+a4
+a2.substring(a6+a5.length));
a6=a2.indexOf(a5);
}
}
while(a2.indexOf("{'")!=-1)
{
a2=a2.replace("{'","{");
a2=a2.replace("'}","}");
}
var a8=/''/g;
return a2.replace(a8,"'");
}
function _chain(
a0,
a1,
a2,
a3,
a4
)
{
return _chainMultiple([a0,a1],a2,a3,a4);
}
function _chainMultiple(
a0,
a1,
a2,
a3
)
{
var a4=true;
for(var a5=0,size=a0.length;a5<size;++a5)
{
var a6=_callChained(a0[a5],a1,a2);
if(a6===false)
{
if(a3)
{
return false;
}
a4=false;
}
}
return a4;
}
function _callChained(
a0,
a1,
a2
)
{
if(a0&&(a0.length>0))
{
if((typeof(a2)=='undefined')||(a2==(void 0)))
{
a2=window.event;
}
var a3=new Function("event",a0);
var a4;
if(_agent.isPIE)
{
a4=a3(a2);
}
else
{
a1._tempFunc=a3;
a4=a1._tempFunc(a2);
a1._tempFunc=(void 0);
}
return!(a4==false);
}
else
{
return true;
}
}
function _checkLength(a0,a1,a2)
{
elementLength=a0.value.length;
if(elementLength>a1)
{
a0.value=a0.value.substr(0,a1);
return true;
}
if(elementLength<a1)
return true;
if(_agent.isIE)
{
if(a2["type"]=="hidden")
a2=window.event;
}
if(a2.type=='change')
return true;
if(a2)
{
if((a2.which<32)
||((a2.which==118)&&(a2["ctrlKey"])))
return true;
}
return false;
}
function _getElementById(
a0,
a1
)
{
if(typeof(a0.getElementById)!='undefined')
{
if(((_agent.kind!="ie")||(_agent.version>=5))&&(!_agent.isBlackBerry))
{
var a2=a0.getElementById(a1);
if((a2==null)||(a2.id==a1))
return a2;
return _findElementById(a0,a1);
}
return a0.getElementById(a1);
}
else if(typeof(a0.all)=='undefined')
{
if(a0.forms.length==0)
return window[a1];
else
for(var a3=0;a3<a0.forms.length;a3++)
{
var a4=a0.forms[a3];
if(a4[a1])
return a4[a1];
}
return window[a1];
}
else
{
return a0.all[a1];
}
}
function _findElementById(
a0,
a1
)
{
if(a0.id==a1)
return a0;
if(a0.childNodes)
{
var a2=a0.childNodes;
for(var a3=0;a3<a2.length;a3++)
{
var a4=_findElementById(a2.item(a3),a1);
if(a4!=null)
return a4;
}
}
return null;
}
function _getQuerySeparator(a0)
{
var a1=a0.charAt(a0.length-1);
if((a1=='&')||(a1=='?'))
return"";
return(a0.indexOf('?')>=0)?'&':'?';
}
function _addParameter(
a0,
a1,
a2
)
{
var a3=a0.indexOf('?');
if(a3==-1)
{
return a0+'?'+a1+'='+a2;
}
else
{
var a4=a0.indexOf('?'+a1+'=',a3);
if(a4==-1)
a4=a0.indexOf('&'+a1+'=',a3+1);
if(a4==-1)
{
return a0+'&'+a1+'='+a2;
}
else
{
var a5=a4+a1.length+2;
var a6=a0.substring(0,a5);
a6+=a2;
var a7=a0.indexOf('&',a5);
if(a7!=-1)
{
a6+=a0.substring(a7);
}
return a6;
}
}
}
function _addFormParameter(
a0,
a1,
a2
)
{
var a3=new Object();
if(a0)
{
for(var a4 in a0)
a3[a4]=a0[a4];
}
a3[a1]=a2;
return a3;
}
function _pprInstallBlockingHandlers(a0,a1)
{
var a2=a0.document;
if(a2==(void 0))
return;
if(!a2.attachEvent&&!a2.addEventListener)
{
return;
}
if(a2.attachEvent)
{
var a3=a0._pprConsumeFirstClick;
if(a1)
{
var a4=a0.event;
if(a4!=(void 0))
{
var a5=document.elementFromPoint(a4.x,a4.y);
if(!a0._pprFirstClickPass
||(((a4.type=='change')||(a4.type=='blur'))
&&(a4.srcElement==a5))
||(!_isSubmittingElement(a5)))
{
_pprControlCapture(a0,true);
return;
}
}
a2.attachEvent('onclick',a3);
}
else
{
a2.detachEvent('onclick',a3);
_pprControlCapture(a0,false);
}
}
else
{
var a3=a0._pprConsumeBlockedEvent;
var a6={'click':1,'keyup':1,'keydown':1,'keypress':1};
for(var a7 in a6)
{
if(a1)
a2.addEventListener(a7,a3,true);
else
a2.removeEventListener(a7,a3,true);
}
}
}
function _pprConsumeClick(a0)
{
if(_agent.isIE)
{
var a1=document.body;
if((a0.x<a1.offsetLeft)||(a0.y<a1.offsetTop)
||(a0.x>a1.offsetWidth)||(a0.y>a1.offsetHeight))
{
_pprStopBlocking(window);
}
}
return false;
}
function _pprStartBlocking(a0)
{
if(_agent.isPIE||_agent.isNokiaPhone||_agent.isBlackBerry)
return;
if(_agent.isIE)
{
a0._pprTimeoutFunc=a0.setTimeout("_doPprStartBlocking(window);",
1);
return;
}
else
{
_doPprStartBlocking(a0);
}
}
function _doPprStartBlocking(a0)
{
if(a0._pprTimeoutFunc)
{
a0.clearTimeout(a0._pprTimeoutFunc);
a0._pprTimeoutFunc=null;
}
if(!a0._pprBlocking)
{
var a1=a0.document.body;
a0._pprBlockStartTime=new Date();
if(_agent.isGecko)
{
if(a0._pprBlockingTimeout!=null)
{
a0.clearTimeout(a0._pprBlockingTimeout);
}
a0._pprBlockingTimeout=a0.setTimeout("_pprStopBlocking(window);",
8000);
}
else if(_agent.isIEGroup)
{
_pprEventElement=window.document.activeElement;
}
_pprInstallBlockingHandlers(a0,true);
a0._pprBlocking=true;
}
}
function _pprStopBlocking(a0)
{
if(a0._pprTimeoutFunc)
{
a0.clearTimeout(a0._pprTimeoutFunc);
a0._pprTimeoutFunc=null;
}
if(_agent.isPIE||_agent.isNokiaPhone||_agent.isBlackBerry)
return;
var a1=a0.document;
if(a0._pprBlocking)
{
if(_agent.isGecko)
{
if(a0._pprBlockingTimeout!=null)
{
a0.clearTimeout(a0._pprBlockingTimeout);
a0._pprBlockingTimeout==null;
}
}
_pprInstallBlockingHandlers(a0,false);
a0._pprEventElement=null;
a0._pprBlocking=false;
}
a0._pprBlocking=false;
}
function _pprFocus(a0,a1)
{
if(_agent.isIEGroup)
{
if(a0.parentNode==null)
return;
var a2=_getElementById(a1,_pprdivElementName);
if((a2)&&(a2["focus"]))
a2.focus();
}
a0.focus();
}
function _pprConsumeBlockedEvent(a0)
{
var a1=true;
if(_pprBlocking)
{
var a2=true;
if(window._pprFirstClickPass)
{
var a3=new Date();
var a4=a3-_pprBlockStartTime;
var a5=150;
if((a4<a5)&&(a0.type=='click'))
{
var a6=a0.explicitOriginalTarget;
a2=!_isSubmittingElement(a6);
}
}
if(a2)
{
a0.stopPropagation();
a0.preventDefault();
a1=false;
}
}
return a1;
}
function _pprConsumeFirstClick(a0)
{
if(_agent.isIE)
{
_pprControlCapture(window,true);
window.document.detachEvent('onclick',_pprConsumeFirstClick);
}
return false;
}
function _pprControlCapture(a0,a1)
{
if(_agent.isIE)
{
var a2=a0.document;
var a3=a2.body;
var a4=_getElementById(a2,_pprdivElementName);
if(a4)
{
if(a1)
{
a4.setCapture();
if(a0._pprEventElement)
a4.focus();
a0._pprSavedCursor=a3.style.cursor;
a3.style.cursor="wait";
a0._pprSavedCursorFlag=true;
}
else if(a0._pprSavedCursorFlag)
{
a4.releaseCapture();
if(a0._pprEventElement)
a0._pprEventElement.focus();
a3.style.cursor=a0._pprSavedCursor;
a0._pprSavedCursor=null;
a0._pprSavedCursorFlag=false;
}
}
}
return;
}
function _pprChoiceAction()
{
if(!_agent.isIE)
return true;
var a0=false;
if((!window._pprBlocking)&&(_pprChoiceChanged))
{
_pprChoiceChanged=false;
a0=true;
}
return a0;
}
function _pprChoiceChangeEvent(a0)
{
if(!_agent.isIE)
return true;
if(!window._pprBlocking)
_pprChoiceChanged=true;
return true;
}
function _supportsPPR()
{
return!_agent.pprUnsupported;
}
function _firePartialChange(a0)
{
var a1=TrPage.getInstance();
var a2=a1.getRequestQueue();
a2.sendRequest(
a1,a1._requestStatusChanged,a0);
}
function _submitPartialChange(
a0,
a1,
a2,
a3)
{
if(!_supportsPPR())
return submitForm(a0,a1,a2);
if((typeof a0)=="string")
a0=document[a0];
if(!a0)
return false;
a2=_addFormParameter(a2,"partial","true");
_pprStartBlocking(window);
var a4=submitForm(a0,a1,a2,true,a3);
if(!a4)
{
_pprStopBlocking(window);
}
}
function _setRequestedFocusNode(a0,a1,a2,a3)
{
if(!a3)
a3=window;
a3._TrFocusRequestDoc=a0;
a3._TrFocusRequestID=a1;
a3._TrFocusRequestNext=(a2==true);
}
function _getRequestedFocusNode(a0)
{
if(a0==(void 0))
a0=window;
if((a0._TrFocusRequestDoc!=null)
&&(a0._TrFocusRequestID!=null))
{
var a1=_getElementById(a0._TrFocusRequestDoc,
a0._TrFocusRequestID);
if(!a1)
return null;
if(a0._TrFocusRequestNext)
{
for(var a2=a1.nextSibling;
a2!=null;
a2=a2.nextSibling)
{
if(_isFocusable(a2)
||((_agent.isIE)&&(a2.nodeName.toLowerCase()=='a')))
{
a1=a2;
break;
}
}
}
return a1;
}
return null;
}
function _getFirstFocusable(a0)
{
if((a0==null)||_isFocusable(a0))
return a0;
if(a0.hasChildNodes)
{
var a1=a0.childNodes;
for(var a2=0;a2<a1.length;a2++)
{
var a3=a1[a2];
var a4=_getFirstFocusable(a3);
if(a4!=null)
return a4;
}
}
return null;
}
function _restoreFocus(a0,a1,a2)
{
if(a0==null)
return;
var a3=_getAncestorByName(a0,"DIV");
if(!a3)
{
_pprFocus(a0,a2);
}
else
{
var a4=a3.scrollTop;
var a5=a3.scrollLeft;
if(((a4==0)&&(a5==0))||!a1)
{
_pprFocus(a0,a2);
}
}
if((_agent.isIE)
&&(a0.tagName=='INPUT')
&&(_getAncestorByName(a0,'TABLE')))
{
_pprFocus(a0,a2);
}
}
function _getAncestorByName(
a0,
a1
)
{
a1=a1.toUpperCase();
while(a0)
{
if(a1==a0.nodeName)
return a0;
a0=a0.parentNode;
}
return null;
}
function _isDescendent(
a0,
a1
)
{
if(a0==null)
return false;
while(a0.parentNode)
{
if(a0==a1)
return true;
a0=a0.parentNode;
}
return false;
}
function _isFocusable(a0)
{
if(a0==null)
return false;
var a1=a0.nodeName.toLowerCase();
if(('a'==a1)&&(a0.href))
{
if(!_agent.isIE||(a0.id))
return true;
var a2=a0.childNodes;
if((a2)&&(a2.length==1))
{
var a3=a2[0].nodeName;
if('img'==a3.toLowerCase())
return false;
}
return true;
}
if(a0.disabled)
return false;
if('input'==a1)
{
return(a0.type!='hidden');
}
return(('select'==a1)||
('button'==a1)||
('textarea'==a1));
}
function _eval(targetWindow,code)
{
if(code==null)
return;
if(_agent.isIEGroup)
{
targetWindow.execScript(code);
}
else
targetWindow.eval(code);
}
function _getInputField(a0)
{
var a1=(void 0);
var a2=(void 0);
if(window.event)
{
kc=window.event.keyCode;
a2=window.event.srcElement;
}
else if(a0)
{
kc=a0.which;
a2=a0.target;
}
if(a2!=(void 0)
&&(a2.tagName=="INPUT"||
a2.tagName=="TEXTAREA"))
a1=a2;
return a1;
}
function _enterField(
a0
)
{
var a1;
var a2;
var a3=true;
var a1=_getInputField(a0);
if(a1!=(void 0))
{
a1.form._mayResetByInput=false;
a1._validValue=a1.value;
a3=false;
}
return a3;
}
function _resetOnEscape(a0)
{
var a1;
var a2=_getInputField(a0);
if(a2!=(void 0))
{
var a3=a2.form;
if(a1==27)
{
var a4=false;
if((a2.selectionStart!=(void 0))&&
(a2.selectionEnd!=(void 0)))
{
a4=(a2.selectionStart!=a2.selectionEnd);
}
else if(document.selection)
{
a4=(document.selection.createRange().text.length!=0);
}
if(!a4)
{
a2.value=a2._validValue;
if(a3._mayResetByInput==true)
{
a3.reset();
a3._mayResetByInput=false;
}
else
{
a3._mayResetByInput=true;
}
}
return false;
}
else
{
a3._mayResetByInput=false;
}
}
return true;
}
function _checkLoadNoPPR()
{
if(_initialFocusID!=null)
_setFocus(_getElementById(document,_initialFocusID));
_agent.pprUnsupported=true;
}
function _checkLoad()
{
if(!_agent.isIEGroup&&document.addEventListener)
{
document.addEventListener("keyup",_trTrackActiveElement,false);
document.addEventListener("mousedown",_trTrackActiveElement,false);
}
if(document.forms)
{
for(var a0=0;a0<document.forms.length;a0++)
{
var a1=document.forms[a0];
if(a1.addEventListener)
{
a1.addEventListener('focus',_enterField,true);
a1.addEventListener('keydown',_resetOnEscape,true);
}
else if(a1.attachEvent)
{
a1.attachEvent('onfocusin',_enterField);
a1.attachEvent('onkeydown',_resetOnEscape);
}
}
}
var a2=_getTop(self);
if((self!=a2)&&a2["_blockReload"])
{
document.onkeydown=_noReload;
}
if((!_agent.isNav)&&(_initialFocusID!=null))
{
var a3=_getElementById(document,_initialFocusID);
if(a3)
_setFocus(a3);
}
if(!_agent.isNokiaPhone)
{
TrPopupDialog._initDialogPage();
}
}
function _getActiveElement()
{
if(document.activeElement)
return document.activeElement;
return window._trActiveElement;
}
function _trTrackActiveElement(a0)
{
window._trActiveElement=a0.target;
}
function _noReload(a0)
{
if(!a0)a0=window.event;
var a1=a0.keyCode;
if((a1==116)||(a1==82&&a0.ctrlKey))
{
if(a0.preventDefault)a0.preventDefault();
a0.keyCode=0;
return false;
}
}
function _handleClientEvent(a0,a1,a2,a3)
{
var a4=new Object();
a4.type=a0;
a4.source=a1;
a4.params=a2;
var a5=new Function("event",a3);
return a5(a4);
}
function _getCookie(a0)
{
var a1=document.cookie;
var a2="";
var a3=a0+"=";
if(a1)
{
var a4=a1.indexOf("; "+a3);
if(a4<0)
{
a4=a1.indexOf(a3);
if(a4>0)
a4=-1;
}
else
a4+=2;
if(a4>=0)
{
var a5=a1.indexOf(";",a4);
if(a5<0)
a5=a1.length;
a2=unescape(a1.substring(a4+a0.length+1,a5));
}
}
return a2;
}
function _setCookie(a0,a1)
{
var a2=window.location.host;
var a3=a2.indexOf(":");
if(a3>=0)
a2=a2.substr(0,a3);
var a4=new Date();
a4.setFullYear(a4.getFullYear()+10);
var a5=a0+"="+a1+
"; path=/;domain="+a2+"; expires="+a4.toGMTString();
document.cookie=a5;
}
function _getTimeZoneID()
{
var a0=-(new Date()).getTimezoneOffset();
var a1;
if(a0>0)
a1="GMT+";
else
{
a1="GMT-";
a0=-a0;
}
var a2=""+a0%60;
if(a2.length==1)
a2="0"+a2;
return(a1+(Math.floor(a0/60))+":"+a2);
}
function _isLTR()
{
return document.documentElement["dir"].toUpperCase()=="LTR";
}
function _isSubmittingElement(a0)
{
var a1=false;
var a2=a0.nodeName.toUpperCase();
if(a2=="BUTTON")
{
a1=true;
}
else if(a2=="IMG")
{
var a3=a0.parentNode;
var a4=a3.nodeName.toUpperCase();
if(('A'==a4)&&(a3.href))
{
var a5=""+a3["onclick"];
if((a5!=(void 0))&&(a5!=null))
{
a1=((a5.indexOf("submitForm")>0)
||(a5.indexOf("_uixspu")>0)
||(a5.indexOf("_adfspu")>0)
||(a5.indexOf("_addRowSubmit")>0));
}
}
}
return a1;
}
function _getKC(a0)
{
if(window.event)
return window.event.keyCode;
else if(a0)
return a0.which;
return-1;
}
function _recentSubmit(a0)
{
if(_lastDateSubmitted)
{
var a1=a0-_lastDateSubmitted;
if((a1>=0)&&(a1<200))
return true;
}
return false;
}
function _recentReset(a0)
{
if(_lastDateReset)
{
var a1=a0-_lastDateReset;
if((a1>=0)&&(a1<200))
return true;
}
return false;
}
function _radioSet_uixspu(a0,a1,a2,a3,a4,a5,a6)
{
_radioSet_adfspu(a0,a1,a2,a3,a6);
}
function _radioSet_adfspu(a0,a1,a2,a3,a4)
{
if(window._pprBlocking)
return;
if(_pendingRadioButton)
{
_pendingRadioButton=false;
_adfspu(a0,a1,a2,a3,a4);
}
else
{
_pendingRadioButton=true;
var a5="_pendingRadioButton=false;_adfspu(";
if((a0!=(void 0))&&(a0!=null))
a5+="'"+a0+"'";
a5+=",";
if(a1!=(void 0))
a5+=a1;
a5+=",";
if((a2!=(void 0))&&(a2!=null))
a5+="'"+a2+"'";
a5+=",";
if((a3!=(void 0))&&(a3!=null))
a5+="'"+a3+"'";
a5+=");";
window.setTimeout(a5,200);
}
}
function _stepSpinboxValue(a0,a1,a2,a3,a4)
{
var a5=false;
var a6=_getElementById(document,a0);
if(a6)
{
var a7=a6.value;
if(isNaN(a7)||isNaN(a2)||isNaN(a3)||isNaN(a4))
{
alert("value, stepSize, min, and max must all be numbers. value: "+
a7+", stepSize: "+a2+", min: "+a3+", max: "+a4);
return false;
}
if(a1)
{
var a8=parseFloat(a7)+parseFloat(a2);
if(a8<a4)
a6.value=a8;
else if(a5)
a6.value=a3;
else a6.value=a4;
}
else
{
var a9=parseFloat(a7)-parseFloat(a2);
if(a9>a3)
a6.value=a9;
else if(a5)
a6.value=a4;
else a6.value=a3;
}
return true;
}
return false;
}
function _clearSpinbox()
{
window.clearTimeout(_spinboxRepeat.timer);
_spinboxRepeat.functionString=null;
}
function _spinboxRepeat(a0,a1,a2,a3,a4)
{
var a5=_stepSpinboxValue(a0,a1,a2,a3,a4);
if(!a5)
{
window.clearTimeout(_spinboxRepeat.timer);
}
else
{
if(_spinboxRepeat.functionString==null)
{
_spinboxRepeat.functionString=
"_spinboxRepeat('"+a0+"',"+a1+
","+a2+","+a3+","+a4+");";
}
_spinboxRepeat.timer=
window.setTimeout(_spinboxRepeat.functionString,1000);
}
}
function _getEventObj()
{
if(typeof(event)=='undefined')
return window.event;
else
return event;
return null;
}
var TrUIUtils=new Object();
TrUIUtils.trim=function(
a0)
{
if(a0!=null&&(typeof a0)=='string')
return a0.replace(TrUIUtils._TRIM_ALL_RE,'');
return a0;
}
TrUIUtils._TRIM_ALL_RE=/^\s*|\s*$/g;
TrUIUtils.createCallback=function(a1,a2)
{
var a3=new Function(
"var f=arguments.callee; return f._func.apply(f._owner, arguments);");
a3._owner=a1;
a3._func=a2;
return a3;
}
TrUIUtils._getWindowClientSize=function()
{
var a4;
if(TrUIUtils['_getWinClientSize']==null)
{
if(_agent.isIE)
{
TrUIUtils._getWinClientSize=function()
{
var a5=((document.compatMode=="BackCompat")?document.body:document.documentElement);
return{w:a5.clientWidth,h:a5.clientHeight};
}
}
else
{
TrUIUtils._getWinClientSize=function()
{
return{w:window.innerWidth,h:window.innerHeight};
}
}
}
return TrUIUtils._getWinClientSize();
}
TrUIUtils._getElementBounds=function(a6)
{
if(typeof(a6)=="string")
{
a6=document.getElementById(a6);
}
if(!a6)
{
return null;
}
var a7=TrUIUtils._getElementLocation(a6);
return{x:a7.x,y:a7.y,w:a6.offsetWidth,h:a6.offsetHeight};
}
TrUIUtils._getElementLocation=function(a8)
{
if(typeof(a8)=="string")
{
a8=document.getElementById(a8);
}
if(!a8)
{
return null;
}
var a9;
if(TrUIUtils['_getElemLoc']==null)
{
if(_agent.isGecko)
{
TrUIUtils._getElemLoc=function(a8)
{
var a10=a8.ownerDocument;
if(a10.getBoxObjectFor===undefined)
{
var a11=a8.getBoundingClientRect();
var a12=Math.round(a11.top);
var a13=a11.left;
var a14=a10.documentElement;
a13+=a14.scrollLeft;
a12+=a14.scrollTop;
return{x:a13,y:a12};
}
else
{
var a15=a10.getBoxObjectFor(a8);
var a16={x:a15.screenX,y:a15.screenY};
a15=a10.getBoxObjectFor(a10.documentElement);
a16.x-=a15.screenX;
a16.y-=a15.screenY;
return a16;
}
}
}
else if(_agent.isIE)
{
TrUIUtils._getElemLoc=function(a8)
{
var a10=a8.ownerDocument;
var a17=a8.getBoundingClientRect();
var a16={x:a17.left,y:a17.top};
var a18=a10.documentElement;
var a19=a18.scrollLeft;
var a20=a18["dir"]=="rtl";
if(a20)
{
a19+=a18.clientWidth-a18.scrollWidth;
}
a16.x-=a18.clientLeft-a19;
a16.y-=(a18.clientTop-a18.scrollTop);
return a16;
}
}
else
{
TrUIUtils._getElemLoc=function(a8)
{
var a21=a8.ownerDocument.contentWindow;
var a22=0;
var a23=0;
for(var a24=a8;a24&&a24!=a21;a24=a24.offsetParent)
{
a22+=a24.offsetLeft;
a23+=a24.offsetTop;
}
return{x:a22,y:a23};
}
}
}
return TrUIUtils._getElemLoc(a8);
}
TrUIUtils._cssToJs=function(a25)
{
var a26='';
var a27=false;
for(var a28=0;a28<a25.length;a28++)
{
if(a25.charAt(a28)=='-')
{
a27=true;
continue;
}
if(a27)
{
a26+=a25.charAt(a28).toUpperCase();
}
else
{
a26+=a25.charAt(a28);
}
a27=false;
}
return a26;
}
TrUIUtils._getStyle=function(a29,a30)
{
if(a29.currentStyle)
{
var a31=this._cssToJs(a30);
return a29.currentStyle[a31];
}
else if(window.getComputedStyle)
{
return document.defaultView.getComputedStyle(a29,'')
.getPropertyValue(a30);
}
return'';
}
TrUIUtils.isNumberConvertible=function(a32)
{
if(a32!=null)
{
var a33=0;
for(var a34=0;a34<a32.length;a34++)
{
var a35=a32.charCodeAt(a34);
if(a35>47&&a35<58)
{
a33++;
}
}
if(a33>15)
return false;
}
return true;
}

var ADFDialogReturn=new Array();
function _launchDialog(
a0,
a1,
a2,
a3,
a4,
a5)
{
var a6=self;
var a7;
if(a5)
{
a7=function()
{
a6._submitPartialChange(a3,0,{rtrn:a4});
};
}
else
{
a7=function()
{
a6.submitForm(a3,0,{rtrn:a4});
};
}
var a8=ADFDialogReturn.length;
ADFDialogReturn[a8]=a7;
a0=a0+"&_rtrnId="+a8;
openWindow(window,a0,a1,a2,1);
}
function openWindow(
a0,
a1,
a2,
a3,
a4,
a5,
a6
)
{
if(a0)
{
if(a4==(void 0))
a4=false;
if(!a5)
{
a5=(a4)?"dialog":"document";
}
if(!a2)
a2="_blank";
var a7=_featureDefaults[a5];
if(a7==(void 0))
{
a5="document";
a7=_featureDefaults[a5];
}
var a8=(a4)
?_modalFeatureOverrides
:_modelessFeatureOverrides;
var a9=(_agent.isIE)
?_ieFeatures
:_nnFeatures;
var a10=null;
if(a3)
{
a10=new Object();
for(var a11 in a3)
{
a10[a11]=a3[a11];
}
}
var a12="";
for(var a13 in a9)
{
var a14=a8[a13];
if(a14==(void 0))
{
if(a10)
{
a14=a10[a13];
delete a10[a13];
}
if(a14==(void 0))
a14=a7[a13];
}
if(a14!=(void 0))
{
var a15=_booleanFeatures[a13]!=(void 0);
if(a14||!a15)
{
a12+=a13;
if(!a15)
{
a12+="="+a14;
}
a12+=",";
}
}
}
for(var a11 in a10)
{
a12+=a11;
if(a10[a11])
a12+="="+a10[a11];
a12+=",";
}
if(a12.length!=0)
{
a12=a12.substring(0,a12.length-1);
}
if(a6)
{
_setDependent(a0,a2,a6);
}
var a16=a0.open(a1,a2,a12);
var a17=false;
if(a16!=null)
{
var a18=0;
try
{
for(p in a16)
{
a18++;
break;
}
if(a18>0)
a17=true;
}
catch(e)
{
}
}
if(!a17)
{
_setDependent(a0,a2,(void 0));
if(_AdfWindowOpenError!=null)
alert(_AdfWindowOpenError);
return;
}
var a19=_agent.atMost("ie",4.99);
var a20=false;
var a21=a0.document;
var a22=a21.body;
if(a4&&!a19)
{
if(_agent.atLeast("ie",4))
{
var a23=a21.getElementById("_trDialogDimmer");
if(a23==null)
{
a23=a21.createElement("div");
a23.id="_trDialogDimmer";
var a24=a23.style;
a24.position="absolute";
a24.zIndex="32000";
a24.backgroundColor="#FFFFFF";
a24.filter="alpha(opacity=50)";
var a25=a21.documentElement;
var a26=Math.max(a25.offsetWidth,a25.scrollWidth);
var a27=Math.max(a25.offsetHeight,a25.scrollHeight);
a24.width=a26+"px";
a24.height=a27+"px";
a24.top="0px";
a24.left="0px";
a22.appendChild(a23);
a20=true;
}
}
if(_agent.isGecko)
{
if(a22!=(void 0))
_addModalCaptureGecko(a22);
}
a0.onfocus=_onModalFocus;
}
if(a4&&(_agent.atLeast("ie",5)&&_agent.isWindows))
{
_addModalCaptureIE(a22);
var a28=(a1!=null&&a1.indexOf(':')!=-1);
if(!a28)
{
var a29=new Function("e","_removeModalCaptureIE(window.document.body)");
a16.attachEvent("onunload",a29);
}
}
if(a4&&!a19)
{
_setDependent(a0,"modalWindow",a16);
}
if(a4&&self._pollManager)
{
_pollManager.deactivateAll();
_pollWhenModalDependentCloses();
}
a16.focus();
if(a20)
{
a0.setTimeout("_clearBodyModalEffects('alpha')",1000);
}
return a16;
}
else
{
return null;
}
}
function _pollWhenModalDependentCloses()
{
if(!_getValidModalDependent(self))
{
_pollManager.reactivateAll();
}
else
{
self.setTimeout("_pollWhenModalDependentCloses()",1000);
}
}
function _onModalFocus()
{
var a0=self.document.body;
var a1=_getModalDependent(self);
var a2=_agent.atLeast("ie",5)&&_agent.isWindows;
if(a1&&!a1.closed)
{
a1.focus();
if(a2)
{
a0.setCapture();
}
}
else
{
if(a2)
{
a0.onlosecapture=null;
_removeModalCaptureIE(a0);
}
}
}
function _clearBodyModalEffects(a0)
{
if(_getValidModalDependent(self)!=null)
{
self.setTimeout("_clearBodyModalEffects('"+a0+"')",1000);
}
else
{
if(a0=='alpha')
{
var a1=self.document;
var a2=a1.getElementById("_trDialogDimmer");
if(a2!=null)
{
a1.body.removeChild(a2);
}
}
}
}
function _getValidModalDependent(
a0
)
{
var a1=_getModalDependent(a0);
if(a1)
{
if(a1.closed)
{
_setDependent(a0,"modalWindow",(void 0));
a1=(void 0);
}
}
return a1;
}
function _sizeWin(
a0,
a1,
a2,
a3
)
{
var a4=_agent.isGecko;
var a5=_agent.isIE;
var a6=_agent.isSafari;
var a7=(a4||a6);
if(!(a7||(a5&&_agent.isWindows)))
return;
var a8=a0.document.body;
if(a8)
{
var a9=(!a5&&(a8.scrollWidth>a8.clientWidth))
?a8.scrollWidth
:_getBodyWidth(a8,a8.offsetWidth,a8.offsetLeft);
var a10=0;
var a11=a3&&((a3['H']&&a3['H']>0)||(a3['W']&&a3['W']>0));
var a12=a8.style;
if(!a11&&(!a12.height||a12.height.length==0))
{
a12.height="auto";
}
if(a7)
{
a10=a8.offsetHeight+(window.outerHeight-window.innerHeight);
a10+=30;
if(window.outerWidth>a8.offsetWidth)
a9+=(window.outerWidth-a8.offsetWidth);
}
else
{
a10=a8.scrollHeight+(a8.offsetHeight-a8.clientHeight);
a10+=21;
a9+=a8.offsetWidth-a8.clientWidth+16;
if(a8.tagName=='BODY')
{
a10+=parseInt(a8.topMargin)+parseInt(a8.bottomMargin);
a9+=parseInt(a8.leftMargin)+parseInt(a8.rightMargin);
}
}
if(a1)
a9+=a1;
if(a2)
a10+=a2;
if(a3!=(void 0))
{
if(a3['W'])
{
var a13=0+a3['W'];
if(a9<a13)
a9=a13;
}
if(a3['H'])
{
var a14=0+a3['H'];
if(a10<a14)
a10=a14;
}
}
var a15=_getTop(a0);
var a16=a5?0:a15.screen.availLeft;
var a17=a5?0:a15.screen.availTop;
var a18=a15.screen.availHeight*0.95;
var a19=a15.screen.availWidth*0.95;
if(a10>a18)
a10=a18;
if(a9>a19)
a9=a19;
try
{
a15.resizeTo(a9,a10);
}
catch(e)
{
;
}
var a20=a5?a15.screenLeft:a15.screenX;
var a21=a5?a15.screenTop:a15.screenY;
var a22=false;
if((a20+a9)>(a16+a19))
{
a20=(a15.screen.availWidth-a9)/2;
a22=true;
}
if((a21+a10)>(a17+a18))
{
a21=(a15.screen.availHeight-a10)/2;
a22=true;
}
if(a22)
{
a15.moveTo(a20,a21);
}
}
}

function _tableSort(
a0,
a1,
a2,
a3,
a4)
{
_submitPartialChange(a0,a1,
{event:'sort',
source:a2,
value:a3,
state:a4});
return false;
}
function CollectionComponent(
a0,
a1
)
{
this._formName=a0;
this._name=a1;
}
CollectionComponent.prototype.getFormName=function()
{
return this._formName;
};
CollectionComponent.prototype.getName=function()
{
return this._name;
};
CollectionComponent.prototype.getFormElement=function(a2)
{
var a3=document.forms[this.getFormName()];
var a4=this.getName()+":"+a2;
var a5=a3[a4];
return a5;
};
CollectionComponent.defineSubmit=function(a6,a7)
{
if(this._eventParam!=(void 0))
return;
CollectionComponent.prototype._eventParam=a6;
CollectionComponent.prototype._sourceParam=a7;
CollectionComponent.prototype._pTargetsParam="partialTargets";
CollectionComponent.prototype.addParam=function(paramName,paramValue){
if(this._params==(void 0))
{
this._params=new Object();
}
this._params[paramName]=paramValue;
}
CollectionComponent.prototype.submit=function(event,link){
this.addParam(this._eventParam,event);
this.addParam(this._sourceParam,this.getName());
var a8=this._params;
var a9=a8[this._pTargetsParam];
if(link!=(void 0))
{
var a10=link.id;
if(a10!=(void 0))
{
_setRequestedFocusNode(document,a10,false,window);
}
if(a9==(void 0))
{
a9=this.getName();
a8[this._pTargetsParam]=a9;
}
}
var a11=this._validate;
if(a11==(void 0))
a11=1;
var a12=submitForm;
if(a9!=(void 0))
{
a12=_submitPartialChange;
}
a12(this.getFormName(),a11,a8);
return false;
};
};
CollectionComponent.defineMultiSelect=function(a13,a14,a15)
{
if(this._selectedKey!=(void 0))
return;
CollectionComponent.prototype._selectedKey=a13;
CollectionComponent.prototype._selectedModeKey=a14;
CollectionComponent.prototype.getLength=function(){
var a16=this._getBoxes();
return a16.length;
};
CollectionComponent.prototype.multiSelect=function(selectAll){
var a16=this._getBoxes();
for(var a17=0;a17<a16.length;a17++)
{
var a18=a16[a17];
if(!a18.disabled)
{
a18.checked=selectAll;
}
}
var a19=this.getFormElement(this._selectedModeKey);
if(selectAll)
{
a19.value="all";
}
else
{
a19.value="none";
}
if(a15)
{
_submitPartialChange(this.getFormName(),1,null);
}
};
CollectionComponent.prototype._getBoxes=function(){
var a16=this.getFormElement(this._selectedKey);
if(a16.length==(void 0))
{
var a20=new Array(1);
a20[0]=a16;
a16=a20;
}
return a16;
};
};
CollectionComponent.defineTree=
function(a21,
a22,
a23,
a24,
a25,
a26,
a27)
{
if(this._pathParam!=(void 0))
return;
CollectionComponent.defineSubmit(a21,a22);
CollectionComponent.prototype._pathParam=a23;
CollectionComponent.prototype._startParam=a24;
CollectionComponent.prototype._gotoEvent=a25;
CollectionComponent.prototype._focusEvent=a26;
CollectionComponent.prototype._validate=a27;
CollectionComponent.prototype.action=function(event,path,link)
{
this.addParam(this._pathParam,path);
return this.submit(event,link);
};
CollectionComponent.prototype.range=function(path,start)
{
this.addParam(this._startParam,start);
return this.action(this._gotoEvent,path);
};
CollectionComponent.prototype.focus=function(path,link)
{
return this.action(this._focusEvent,path,link);
};
};

function _TrPollManager()
{
this.pollIdList;
this.active=true;
}
_TrPollManager.prototype.addAndActivate=function(a0,a1,a2)
{
if(!this.pollIdList)
this.pollIdList=new Array();
this[a0]=new _TrPollCommand(a1,a2,this.active);
idIndex=-1;
for(var a3=0;a3<this.pollIdList.length;a3++)
{
if(a0==this.pollIdList[a3])
{
idIndex=a3;
break;
}
}
if(idIndex!=-1)
{
this.pollIdList[idIndex]==a0;
}
else
{
this.pollIdList.push(a0);
}
}
_TrPollManager.prototype.deactivateAll=function()
{
for(var a4=0;a4<this.pollIdList.length;a4++)
{
clearTimeout(this[this.pollIdList[a4]].commandId);
}
this.active=false;
}
_TrPollManager.prototype.reactivateAll=function()
{
for(var a5=0;a5<this.pollIdList.length;a5++)
{
this[this.pollIdList[a5]].activate();
}
this.active=true;
}
function _TrPollCommand(a0,a1,a2)
{
this.commandString=a0;
this.timeout=a1;
if(a2)
this.activate();
}
_TrPollCommand.prototype.activate=function()
{
this.commandId=setTimeout(this.commandString,this.timeout);
}

var _cfBus=new Object();
var _cfTransIconURL;
var _cfOpaqueIconURL;
var _cfBgColor;
function _cfsw(
a0)
{
var a1=_getColorFieldFormat(a0);
var a2=a0.name+"$sw";
var a3=null;
var a4=_getElementById(document,a2);
if(a4!=null)
{
var a5=false;
if(a0.value!="")
{
try
{
a3=a1.getAsObject(a0.value);
}
catch(e)
{
}
}
if(a3!=null)
{
if(a3.alpha==0)
{
a4.style.backgroundColor=null;
a4.src=_cfTransIconURL;
a4.alt=_cfTrans;
}
else
{
a4.style.backgroundColor=
new TrColorConverter("#RRGGBB").getAsString(a3);
a4.src=_cfOpaqueIconURL;
a4.alt=a1.getAsString(a3);
}
}
else
{
a4.style.backgroundColor=_cfBgColor;
a4.src=_cfOpaqueIconURL;
a4.alt=null;
}
if(_agent.isGecko)
a4.title=a4.alt;
}
}
function _returnColorPickerValue(
a0,
a1
)
{
var a2=a0.returnValue;
var a3=a0._colorField;
if(a3==null)
{
a3=_savedColorField1879034;
}
if(a0.isApplicable)
_cfUpdate(a3,a2);
}
function _cfbs(
a0)
{
_cfUpdate(_cfBus[a0.source],a0.params.value);
}
function _cfUpdate(
a0,
a1)
{
if(a0!=null)
{
var a2=_getColorFieldFormat(a0);
var a3=(a0.type!='hidden');
var a4=a0.value;
var a5=a2.getAsString(a1);
if(a5==_cfTrans&&!a2._allowsTransparent)
return;
if(a5==null)
a5="";
if(a5!=a0.value)
{
if(a0.onchange!=null)
{
if(_agent.isIE)
{
a0.onpropertychange=function()
{
var a6=window.event;
if(a6.propertyName=='value')
{
a0.onpropertychange=function(){};
_cfsw(a0);
a0.onchange(a6);
}
}
a0.value=a5;
}
else
{
a0.value=a5;
if(!_agent.isNav)
_cfsw(a0);
var a6=new Object();
a6.type='change';
a6.target=a0;
a0.onchange(a6);
}
}
else
{
a0.value=a5;
if(!_agent.isNav)
_cfsw(a0);
}
}
if(a3)
{
a0.select();
a0.focus();
}
}
}
function _lcp(
a0,
a1,
a2
)
{
var a3=document.forms[a0][a1];
if(!a2)
{
a2=_jspDir+_getQuerySeparator(_jspDir)+"_t=fred&_red=cp";
}
else
{
var a4=a2.lastIndexOf('?');
var a5="";
if(a4==-1)
{
a4=a2.length;
}
else
{
a5=a2.substr(a4+1);
}
var a6=_jspDir+_getQuerySeparator(_jspDir);
a6+=a5;
a6+=_getQuerySeparator(a6);
a6+="_t=fred";
var a7=a2.substring(0,a4);
a2=a6;
a2+="&redirect="+escape(a7);
}
var a8=_cfs[a1];
var a9="#RRGGBB"
if(a8!=null)
{
a2+="&pattern=";
if(typeof a8=="string")
{
a9=a8;
a2+=escape(a9);
}
else
{
a9=a8[0];
a2+=escape(a8.join(" "));
}
}
if(a3.value!="")
{
var a10=_getColorFieldFormat(a3);
try
{
var a11=a10.getAsObject(a3.value);
if(a11!=null)
{
a2+="&value=";
if(a11.alpha==0)
a2+=escape(_cfTrans);
else
a2+=escape(new TrColorConverter(a9).getAsString(a11));
}
}
catch(e)
{
}
}
var a12=_cfts[a1];
if(a12!=null)
{
a2+="&allowsTransparent="+a12;
}
a2+="&loc="+_locale;
if(window["_enc"])
{
a2+="&enc="+_enc;
}
var a13=openWindow(self,
a2,
'colorDialog',
{width:430,height:230},
true,
null,
_returnColorPickerValue);
a13._colorField=a3;
_savedColorField1879034=a3;
}
var _savedColorField1879034;

function _getColorFieldFormat(
a0)
{
var a1=a0.name;
if(a1&&_cfs)
{
var a2=_cfs[a1];
var a3=_cfts[a1];
if(a2||a3)
return new TrColorConverter(a2,a3);
}
return new TrColorConverter();
}
function _fixCFF(
a0)
{
var a1=_getColorFieldFormat(a0);
if(a0.value!="")
{
try
{
var a2=a1.getAsObject(a0.value);
if(a2!=null)
a0.value=a1.getAsString(a2);
}
catch(e)
{
}
}
}

function TrColorConverter(
a0,
a1,
a2,
a3)
{
this._class="TrColorConverter";
this._allowsTransparent=a1;
this._patternsString=a2;
this._messages=a3;
if(a0!=null)
{
if(typeof(a0)=="string")
a0=[a0];
}
this._pattern=a0;
}
TrColorConverter.prototype=new TrConverter();
TrColorConverter.prototype.getFormatHint=function()
{
if(this._messages&&this._messages["hint"])
{
return TrMessageFactory.createCustomMessage(
this._messages["hint"],
this._pattern);
}
else
{
return TrMessageFactory.createMessage(
"org.apache.myfaces.trinidad.convert.ColorConverter.FORMAT_HINT",
this._pattern);
}
}
TrColorConverter.prototype.getAsString=function(
a4)
{
if(a4==null)
return null;
if(a4.alpha==0)
return _cfTrans;
var a5=new Object();
a5.value="";
var a6=this._pattern;
if(typeof a6!="string")
a6=a6[0];
_cfoDoClumping(a6,
_cfoSubformat,
a4,
a5);
return a5.value;
}
TrColorConverter.prototype.getAsObject=function(
a7,
a8)
{
if(a7==null)
return null;
a7=TrUIUtils.trim(a7);
if(a7.length==0)
return null
if(this._allowsTransparent&&_cfTrans==a7)
return new TrColor(0,0,0,0);
var a9;
var a10="org.apache.myfaces.trinidad.convert.ColorConverter.CONVERT";
if(this._messages&&this._messages["detail"])
{
a9=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(a10),
this._messages["detail"],
a8,
a7,
this._patternsString);
}
else
{
a9=_createFacesMessage(a10,
a8,
a7,
this._patternsString);
}
var a11=this._pattern;
if(typeof a11=="string")
{
return this._rgbColorParseImpl(a7,
a11,
a9);
}
else
{
var a12;
for(a12=0;a12<a11.length;a12++)
{
try{
var a13=this._rgbColorParseImpl(a7,
a11[a12],
a9);
return a13;
}
catch(e)
{
if(a12==a11.length-1)
throw e;
}
}
}
}
TrColorConverter.prototype._rgbColorParseImpl=function(
a14,
a15,
a16)
{
var a17=new Object();
a17.currIndex=0;
a17.parseString=a14;
a17.parseException=new TrConverterException(a16);
var a18=new TrColor(0x00,0x00,0x00);
if(_cfoDoClumping(a15,
_cfoSubParse,
a17,
a18))
{
if(a14.length!=a17.currIndex)
{
throw a17.parseException;
}
return a18;
}
else
{
throw a17.parseException;
}
}
function TrColor(
a0,
a1,
a2,
a3)
{
this._class="TrColor";
if(a3==null)
a3=0xff;
this.red=(a0&0xff);
this.green=(a1&0xff);
this.blue=(a2&0xff);
this.alpha=(a3&0xff);
}
TrColor.prototype.toString=function()
{
return"rgba("+this.red+
","+this.green+
","+this.blue+
","+this.alpha+")";
}
var _cfTrans;
function _cfoDoClumping(
a0,
a1,
a2,
a3
)
{
var a4=a0.length;
var a5=false;
var a6=0;
var a7=null;
var a8=0;
for(var a9=0;a9<a4;a9++)
{
var a10=a0.charAt(a9);
if(a5)
{
if(a10=="\'")
{
a5=false;
if(a6!=1)
{
a8++;
a6--;
}
if(!a1(a0,
"\'",
a8,
a6,
a2,
a3))
{
return false;
}
a6=0;
a7=null;
}
else
{
a6++;
}
}
else
{
if(a10!=a7)
{
if(a6!=0)
{
if(!a1(a0,
a7,
a8,
a6,
a2,
a3))
{
return false;
}
a6=0;
a7=null;
}
if(a10=='\'')
{
a5=true;
}
a8=a9;
a7=a10;
}
a6++;
}
}
if(a6!=0)
{
if(!a1(a0,
a7,
a8,
a6,
a2,
a3))
{
return false;
}
}
return true;
}
function _cfoSubformat(
a0,
a1,
a2,
a3,
a4,
a5
)
{
var a6=null;
if((a1>='A')&&(a1<='Z')||
(a1>='a')&&(a1<='z'))
{
switch(a1)
{
case'r':
a6=_cfoGetPaddedNumber(a4.red,a3,3,10);
break;
case'g':
a6=_cfoGetPaddedNumber(a4.green,a3,3,10);
break;
case'b':
a6=_cfoGetPaddedNumber(a4.blue,a3,3,10);
break;
case'a':
a6=_cfoGetPaddedNumber(a4.alpha,a3,3,10);
break;
case'R':
a6=
_cfoGetPaddedNumber(a4.red,a3,2,16).toUpperCase();
break;
case'G':
a6=
_cfoGetPaddedNumber(a4.green,a3,2,16).toUpperCase();
break;
case'B':
a6=
_cfoGetPaddedNumber(a4.blue,a3,2,16).toUpperCase();
break;
case'A':
a6=
_cfoGetPaddedNumber(a4.alpha,a3,2,16).toUpperCase();
break;
default:
a6="";
}
}
else
{
a6=a0.substring(a2,a2+a3);
}
a5.value+=a6;
return true;
}
function _cfoSubParse(
a0,
a1,
a2,
a3,
a4,
a5
)
{
var a6=a4.currIndex;
if((a1>='A')&&(a1<='Z')||
(a1>='a')&&(a1<='z'))
{
switch(a1)
{
case'r':
a5.red=_cfoAccumulateNumber(a4,a3,3,10);
if(a5.red==null)
{
return false;
}
break;
case'g':
a5.green=_cfoAccumulateNumber(a4,a3,3,10);
if(a5.green==null)
{
return false;
}
break;
case'b':
a5.blue=_cfoAccumulateNumber(a4,a3,3,10);
if(a5.blue==null)
{
return false;
}
break;
case'a':
a5.alpha=_cfoAccumulateNumber(a4,a3,3,10);
if(a5.alpha==null)
{
return false;
}
break;
case'R':
a5.red=_cfoAccumulateNumber(a4,a3,2,16);
if(a5.red==null)
{
return false;
}
break;
case'G':
a5.green=_cfoAccumulateNumber(a4,a3,2,16);
if(a5.green==null)
{
return false;
}
break;
case'B':
a5.blue=_cfoAccumulateNumber(a4,a3,2,16);
if(a5.blue==null)
{
return false;
}
break;
case'A':
a5.alpha=_cfoAccumulateNumber(a4,a3,2,16);
if(a5.alpha==null)
{
return false;
}
break;
default:
}
}
else
{
return _cfoMatchText(a4,
a0.substring(a2,a2+a3));
}
return true;
}
function _cfoMatchText(
a0,
a1
)
{
if(!a1)
return false;
var a2=a1.length;
var a3=a0.currIndex;
var a4=a0.parseString;
if(a2>a4.length-a3)
{
return false;
}
var a5=a4.substring(a3,a3+a2);
if(a5!=a1)
return false;
a0.currIndex+=a2;
return true;
}
function _cfoAccumulateNumber(
a0,
a1,
a2,
a3)
{
var a4=a0.currIndex;
var a5=a4;
var a6=a0.parseString;
var a7=a6.length;
if(a7>a5+a2)
a7=a5+a2;
var a8=0;
while(a5<a7)
{
var a9=parseInt(a6.charAt(a5),a3);
if(!isNaN(a9))
{
a8*=a3;
a8+=a9;
a5++;
}
else
{
break;
}
}
if(a4!=a5&&
(a5-a4)>=a1)
{
a0.currIndex=a5;
return a8;
}
else
{
return null;
}
}
function _cfoGetPaddedNumber(
a0,
a1,
a2,
a3)
{
var a4=a0.toString(a3);
if(a1!=null)
{
var a5=a1-a4.length;
while(a5>0)
{
a4="0"+a4;
a5--;
}
}
if(a2!=null)
{
var a6=a4.length-a2;
if(a6>0)
{
a4=a4.substring(a6,
a6+a2);
}
}
return a4;
}

var _shuttle_no_name="You must supply the shuttle's name to create a proxy";
var _shuttle_no_form_name_provided="A form name must be provided";
var _shuttle_no_form_available="This shuttle is not in a form";
function TrShuttleProxy(
a0,
a1
)
{
if(a0==(void 0))
{
alert(_shuttle_no_name);
this.shuttleName="";
this.formName="";
return;
}
this.shuttleName=a0;
this.formName="";
if(a1==(void 0))
{
var a2=document.forms.length;
var a3=a0+":leading";
for(var a4=0;a4<a2;a4++)
{
if(document.forms[a4][a3]!=(void 0))
{
this.formName=_getFormName(document.forms[a4]);
break;
}
}
if(this.formName=="")
{
alert(shuttle_no_form_available);
return;
}
}
else
{
this.formName=a1;
}
}
TrShuttleProxy.prototype.getItems=function(
a5
)
{
if(a5==(void 0))
{
a5=true;
}
var a6=TrShuttleProxy._getListName(this.shuttleName,a5);
var a7=document.forms[this.formName].elements[a6];
var a8=new Array();
for(var a9=0;a9<a7.length-1;a9++)
{
a8[a9]=a7.options[a9];
}
return a8;
};
TrShuttleProxy.prototype.getSelectedItems=function(
a10
)
{
if(a10==(void 0))
{
a10=true;
}
var a11=TrShuttleProxy._getListName(this.shuttleName,a10);
var a12=document.forms[this.formName].elements[a11];
var a13=new Array();
var a14=0;
for(var a15=0;a15<a12.length-1;a15++)
{
if(a12.options[a15].selected)
{
a13[a14]=a12.options[a15];
a14++;
}
}
return a13;
};
TrShuttleProxy.prototype.getItemCount=function(
a16
)
{
if(a16==(void 0))
{
a16=true;
}
var a17=TrShuttleProxy._getListName(this.shuttleName,a16);
return document.forms[this.formName].elements[a17].length-1;
};
TrShuttleProxy.prototype.getSelectedItemCount=function(
a18
)
{
if(a18==(void 0))
{
a18=true;
}
var a19=TrShuttleProxy._getListName(this.shuttleName,a18);
var a20=document.forms[this.formName].elements[a19];
var a21=0;
for(var a22=0;a22<a20.length-1;a22++)
{
if(a20.options[a22].selected)
{
a21++;
}
}
return a21;
};
TrShuttleProxy.prototype.addItem=function(
a23,
a24,
a25,
a26,
a27
)
{
if(a26==(void 0))
{
a26="";
}
if(a25==(void 0))
{
a25="";
}
if(a27==(void 0))
{
a27="";
}
if(a23==(void 0))
{
a23=true;
}
var a28=TrShuttleProxy._getListName(this.shuttleName,a23);
if(a24==(void 0))
{
a24=document.forms[this.formName].elements[a28].length-1;
}
if(a24<0)
{
a24=0;
}
if(a24>document.forms[this.formName].elements[a28].length-1)
{
a24=document.forms[this.formName].elements[a28].length-1;
}
var a29=document.forms[this.formName].elements[a28];
a29.options[a29.length]=
new Option(a29.options[a29.length-1].text,
a29.options[a29.length-1].value,
false,
false);
for(var a30=a29.length-1;a30>a24;a30--)
{
a29.options[a30].text=a29.options[a30-1].text;
a29.options[a30].value=a29.options[a30-1].value;
a29.options[a30].selected=a29.options[a30-1].selected;
}
a29.options[a24].text=a25;
a29.options[a24].value=a26;
a29.options[a24].selected=false;
var a31=TrShuttleProxy._getDescArray(a28);
TrShuttleProxy._addDescAtIndex(a31,a27,a24);
TrShuttleProxy._makeList(this.formName,a28);
};
TrShuttleProxy.prototype.deleteItemByValue=function(
a32,
a33
)
{
if(a33==(void 0))
{
return;
}
var a34=TrShuttleProxy._getListName(this.shuttleName,a32);
var a35=document.forms[this.formName].elements[a34];
for(var a36=0;a36<a35.length-1;a36++)
{
var a37=a35.options[a36].value;
if(a37==a33)
{
var a38=TrShuttleProxy._getDescArray(a34);
TrShuttleProxy._deleteDescAtIndex(a38,a36);
TrShuttleProxy._clearDescAreas(this.formName,a34);
a35.options[a36]=null;
TrShuttleProxy._makeList(this.formName,a34);
return;
}
}
};
TrShuttleProxy.prototype.deleteSelectedItems=function(
a39
)
{
if(a39==(void 0))
{
a39=true;
}
var a40=TrShuttleProxy._getListName(this.shuttleName,a39);
var a41=document.forms[this.formName].elements[a40];
var a42=TrShuttleProxy._getSelectedIndexes(this.formName,a40);
for(var a43=a42.length;a43>=0;a43--)
{
a41.options[a42[a43]]=null;
}
var a44=TrShuttleProxy._getDescArray(a40);
TrShuttleProxy._deleteDescAtIndexes(a44,a42);
TrShuttleProxy._clearDescAreas(this.formName,a40);
TrShuttleProxy._makeList(this.formName,a40);
};
TrShuttleProxy.prototype.move=function(
a45,
a46
)
{
if(a46==(void 0))
{
a46=false;
}
if(a45==(void 0))
{
a45=true;
}
var a47=TrShuttleProxy._getListName(this.shuttleName,a45);
var a48=TrShuttleProxy._getListName(this.shuttleName,!a45);
if(a46)
{
TrShuttleProxy._moveAllItems(a47,a48,this.formName);
}
else
{
TrShuttleProxy._moveItems(a47,a48,this.formName);
}
};
TrShuttleProxy.prototype.reorderList=function(
a49,
a50,
a51
)
{
if(a51==(void 0))
{
a51=true;
}
if(a50==(void 0))
{
a50=false;
}
if(a49==(void 0))
{
a49=false;
}
var a52=TrShuttleProxy._getListName(this.shuttleName,a51);
if(!a50)
{
TrShuttleProxy._orderList(a49,a52,this.formName);
}
else
{
TrShuttleProxy._orderTopBottomList(a49,a52,this.formName);
}
};
TrShuttleProxy.prototype.reset=function()
{
TrShuttleProxy._resetItems(this.shuttleName,this.formName);
};
TrShuttleProxy._remove=function(a53,a54,a55)
{
var a56=a53.length;
if(a55>a56)
return;
for(var a57=a54;a57<a56;a57++)
{
if(a57<a56-a55)
a53[a57]=a53[a57+a55];
else
a53[a57]=void 0;
}
a53.length=a56-a55;
}
TrShuttleProxy._displayDesc=function(
a58,
a59
)
{
if(a59==(void 0))
{
alert(_shuttle_no_form_name_provided);
return;
}
if(a59.length==0)
{
alert(shuttle_no_form_available);
return;
}
var a60=document.forms[a59].elements[a58+':desc'];
if(a60==void(0))
{
return;
}
var a61=TrShuttleProxy._getDescArray(a58);
if(a61==(void 0)||a61.length==0)
{
return;
}
var a62=TrShuttleProxy._getSelectedIndexes(a59,a58);
if(a62.length==0)
{
a60.value="";
TrShuttleProxy._setSelected(a58,a62);
return;
}
var a63=TrShuttleProxy._getSelectedDesc(a58,a61,a62);
a60.value=a63;
TrShuttleProxy._setSelected(a58,a62);
}
TrShuttleProxy._getDescArray=function
(
a64
)
{
var a65=window[a64.replace(/:/g,'_')+'_desc'];
return a65;
}
TrShuttleProxy._getSelectedDesc=function
(
a66,
a67,
a68
)
{
var a69=TrShuttleProxy._getSelectedArray(a66);
if(a68.length==1)
return a67[a68[0]];
if(a68.length-a69.length!=1)
return"";
for(var a70=0;a70<a68.length;a70++)
{
if(a70>=a69.length||a69[a70]!=a68[a70])
return a67[a68[a70]];
}
return"";
}
TrShuttleProxy._getSelectedArray=function
(
a71
)
{
var a72=window[a71.replace(/:/g,'_')+'_sel'];
return a72;
}
TrShuttleProxy._setSelected=function
(
a73,
a74
)
{
var a75=TrShuttleProxy._getSelectedArray(a73);
if(a75!=(void 0))
{
var a76=a75.length;
TrShuttleProxy._remove(a75,0,a76);
for(var a77=0;a77<a74.length;a77++)
{
a75[a77]=a74[a77];
}
}
}
TrShuttleProxy._addDescAtIndex=function
(
a78,
a79,
a80
)
{
if(a78!=(void 0))
{
var a81=a78.length;
for(var a82=a81-1;a82>=a80;a82--)
{
a78[a82+1]=a78[a82];
}
a78[a80]=a79;
a78.length=a81+1;
}
}
TrShuttleProxy._deleteDescAtIndex=function
(
a83,
a84
)
{
if(a83!=(void 0))
TrShuttleProxy._remove(a83,a84,1);
}
TrShuttleProxy._deleteDescAtIndexes=function
(
a85,
a86
)
{
if(a85!=(void 0))
{
for(var a87=a86.length-1;a87>=0;a87--)
{
TrShuttleProxy._remove(a85,a86[a87],1);
}
}
}
TrShuttleProxy._clearDescAreas=function(
a88,
a89,
a90
)
{
var a91=document.forms[a88].elements[a89+':desc'];
var a92=document.forms[a88].elements[a90+':desc'];
if(a91!=void(0))
{
a91.value="";
}
if(a92!=void(0))
{
a92.value="";
}
}
TrShuttleProxy._moveItems=function(
a93,
a94,
a95
)
{
if(a95==(void 0))
{
a95=TrShuttleProxy._findFormNameContaining(a93);
}
if(a95.length==0)
{
alert(shuttle_no_form_available);
return;
}
var a96=document.forms[a95].elements[a93];
var a97=document.forms[a95].elements[a94];
if(a96==(void 0)||a97==(void 0))
return;
var a98=TrShuttleProxy._getSelectedIndexes(a95,a93);
if(a98.length==0)
{
if(_shuttle_no_items_selected.length>0)
alert(_shuttle_no_items_selected);
return;
}
var a99=TrShuttleProxy._getDescArray(a93);
var a100=TrShuttleProxy._getDescArray(a94);
a97.selectedIndex=-1;
var a101=a97.length-1;
var a102=a97.options[a101].text;
for(var a103=0;a103<a98.length;a103++)
{
var a104=a96.options[a98[a103]].text;
var a105=a96.options[a98[a103]].value;
if(a103==0)
{
a97.options[a101].text=a104;
a97.options[a101].value=a105;
}
else
{
a97.options[a101]=new Option(a104,a105,false,false);
}
if(a100!=(void 0)&&a99!=(void 0))
a100[a101]=a99[a98[a103]];
a97.options[a101].selected=true;
a101++;
}
a97.options[a101]=new Option(a102,"",false,false);
a97.options[a101].selected=false;
for(var a103=a98.length-1;a103>=0;a103--)
{
if(a99!=(void 0))
TrShuttleProxy._remove(a99,a98[a103],1);
a96.options[a98[a103]]=null;
}
a96.selectedIndex=-1;
TrShuttleProxy._clearDescAreas(a95,a93);
TrShuttleProxy._displayDesc(a94,a95);
TrShuttleProxy._makeList(a95,a93);
TrShuttleProxy._makeList(a95,a94);
}
TrShuttleProxy._moveAllItems=function(
a106,
a107,
a108
)
{
if(a108==(void 0))
{
a108=TrShuttleProxy._findFormNameContaining(a106);
}
var a109=document.forms[a108].elements[a106];
var a110=document.forms[a108].elements[a107];
var a111=
a110.options[document.forms[a108].elements[a107].length-1].text
var a112=a110.length-1;
var a113=TrShuttleProxy._getDescArray(a106);
var a114=TrShuttleProxy._getDescArray(a107);
if(a109.length>1)
{
var a115=a109.length
for(var a116=0;a116<a115-1;a116++)
{
var a117=a109.options[0].text;
var a118=a109.options[0].value;
a109.options[0]=null;
if(a116==0)
{
a110.options[a112].text=a117;
a110.options[a112].value=a118;
}
else
{
a110.options[a112]=new Option(a117,a118,false,false);
}
if(a114!=(void 0)&&a113!=(void 0))
a114[a112]=a113[a116];
a112++;
}
a110.options[a112]=new Option(a111,"",false,false);
a110.options[a112].selected=false;
if(a113!=(void 0))
{
var a119=a113.length;
TrShuttleProxy._remove(a113,0,a119);
}
a109.selectedIndex=-1;
a110.selectedIndex=-1;
TrShuttleProxy._clearDescAreas(a108,a106,a107);
TrShuttleProxy._makeList(a108,a106);
TrShuttleProxy._makeList(a108,a107);
}
else if(_shuttle_no_items.length>0)
{
alert(_shuttle_no_items);
}
}
TrShuttleProxy._orderList=function(
a120,
a121,
a122
)
{
if(a122==(void 0))
{
a122=TrShuttleProxy._findFormNameContaining(a121);
}
var a123=document.forms[a122].elements[a121];
var a124=TrShuttleProxy._getSelectedIndexes(a122,a121);
if(a124.length==0)
{
if(_shuttle_no_items_selected.length>0)
alert(_shuttle_no_items_selected);
return;
}
var a125=TrShuttleProxy._getDescArray(a121);
var a126=a124.length-1;
while(a126>=0)
{
var a127=a124[a126];
var a128=a127;
var a129=a126;
while((a129>0)&&((a124[a129]-
a124[a129-1])==1))
{
a129--;
a128--;
}
if(a120==0)
{
if(a128!=0)
{
var a130=a123.options[a128-1].text;
var a131=a123.options[a128-1].value;
if(a125!=(void 0))
var a132=a125[a128-1];
for(var a133=a128;a133<=a127;a133++)
{
a123.options[a133-1].text=a123.options[a133].text;
a123.options[a133-1].value=a123.options[a133].value;
a123.options[a133-1].selected=true;
if(a125!=(void 0))
a125[a133-1]=a125[a133];
}
a123.options[a127].text=a130;
a123.options[a127].value=a131;
a123.options[a127].selected=false;
if(a125!=(void 0))
a125[a127]=a132;
}
}
else
{
if(a127!=a123.length-2)
{
var a130=a123.options[a127+1].text;
var a131=a123.options[a127+1].value;
if(a125!=(void 0))
var a132=a125[a127+1];
for(var a133=a127;a133>=a128;a133--)
{
a123.options[a133+1].text=a123.options[a133].text;
a123.options[a133+1].value=a123.options[a133].value;
a123.options[a133+1].selected=true;
if(a125!=(void 0))
a125[a133+1]=a125[a133];
}
a123.options[a128].text=a130;
a123.options[a128].value=a131;
a123.options[a128].selected=false;
if(a125!=(void 0))
a125[a128]=a132;
}
}
a126=a129-1;
}
TrShuttleProxy._displayDesc(a121,a122);
TrShuttleProxy._makeList(a122,a121);
}
TrShuttleProxy._orderTopBottomList=function(
a134,
a135,
a136
)
{
if(a136==(void 0))
{
a136=TrShuttleProxy._findFormNameContaining(a135);
}
var a137=document.forms[a136].elements[a135];
var a138=TrShuttleProxy._getSelectedIndexes(a136,a135);
if(a138.length==0)
{
if(_shuttle_no_items_selected.length>0)
alert(_shuttle_no_items_selected);
return;
}
var a139=TrShuttleProxy._getDescArray(a135);
var a140=new Array();
var a141=new Array();
var a142=new Array();
var a143=new Array();
var a144=0;
if(a134==0)
{
var a145=0;
var a144=0;
for(var a146=0;
a146<a138[a138.length-1];
a146++)
{
if(a146!=a138[a145])
{
a142[a144]=a137.options[a146].text;
a143[a144]=a137.options[a146].value;
if(a139!=(void 0))
a140[a144]=a139[a146];
a144++
}
else
{
if(a139!=(void 0))
a141[a145]=a139[a146];
a145++;
}
}
if(a139!=(void 0))
a141[a145]=a139[a146];
for(var a147=0;a147<a138.length;a147++)
{
a137.options[a147].text=a137.options[a138[a147]].text;
a137.options[a147].value=a137.options[a138[a147]].value;
a137.options[a147].selected=true;
if(a139!=(void 0))
a139[a147]=a141[a147];
}
for(var a148=0;a148<a142.length;a148++)
{
a137.options[a147].text=a142[a148];
a137.options[a147].value=a143[a148];
a137.options[a147].selected=false;
if(a139!=(void 0))
a139[a147]=a140[a148];
a147++
}
}
else
{
var a145=1;
var a144=0;
if(a139!=(void 0))
a141[0]=a139[a138[0]];
for(var a149=a138[0]+1;
a149<=a137.length-2;
a149++)
{
if((a145==a138.length)||
(a149!=a138[a145]))
{
a142[a144]=a137.options[a149].text;
a143[a144]=a137.options[a149].value;
if(a139!=(void 0))
a140[a144]=a139[a149];
a144++;
}
else
{
if(a139!=(void 0))
a141[a145]=a139[a149];
a145++;
}
}
var a148=a137.length-2;
for(var a147=a138.length-1;a147>=0;a147--)
{
a137.options[a148].text=a137.options[a138[a147]].text;
a137.options[a148].value=a137.options[a138[a147]].value;
a137.options[a148].selected=true;
if(a139!=(void 0))
a139[a148]=a141[a147];
a148--;
}
for(var a147=a142.length-1;a147>=0;a147--)
{
a137.options[a148].text=a142[a147];
a137.options[a148].value=a143[a147];
a137.options[a148].selected=false;
if(a139!=(void 0))
a139[a148]=a140[a147];
a148--
}
}
TrShuttleProxy._displayDesc(a135,a136);
TrShuttleProxy._makeList(a136,a135);
}
TrShuttleProxy._getSelectedIndexes=function(
a150,
a151
)
{
var a152=document.forms[a150].elements[a151];
var a153=new Array();
var a154=0;
for(var a155=0;a155<a152.length-1;a155++)
{
if(a152.options[a155].selected)
{
a153[a154]=a155;
a154++;
}
}
return a153;
}
TrShuttleProxy._findFormNameContaining=function(
a156
)
{
var a157=document.forms.length;
for(var a158=0;a158<a157;a158++)
{
if(document.forms[a158][a156]!=(void 0))
{
return _getFormName(document.forms[a158]);
}
}
return"";
}
TrShuttleProxy._makeList=function(
a159,
a160
)
{
var a161=document.forms[a159].elements[a160];
if(a161==null)
return;
var a162="";
for(var a163=0;a163<a161.length-1;a163++)
{
if(a161.options[a163].value.length>0)
{
a162=a162+
TrShuttleProxy._trimString(a161.options[a163].value)
+';';
}
else
{
a162=a162+
TrShuttleProxy._trimString(a161.options[a163].text)
+';';
}
}
document.forms[a159].elements[a160+':items'].value=a162;
}
TrShuttleProxy._trimString=function(
a164
)
{
var a165=a164.length-1;
if(a164.charAt(a165)!=' ')
{
return a164;
}
while((a164.charAt(a165)==' ')&&(a165>0))
{
a165=a165-1;
}
a164=a164.substring(0,a165+1);
return a164;
}
TrShuttleProxy._getListName=function(
a166,
a167
)
{
var a168=(a167)?a166+":leading":
a166+":trailing";
return a168;
}
TrShuttleProxy._resetItems=function(
a169,
a170)
{
leadingListName=TrShuttleProxy._getListName(a169,true);
trailingListName=TrShuttleProxy._getListName(a169,false);
var a171=document.forms[a170].elements[leadingListName];
if(!a171)
return;
var a172=document.forms[a170].elements[trailingListName];
var a173=TrShuttleProxy._getOriginalLists(a169,a170);
var a174=a173.leading;
var a175=a173.trailing;
var a176=TrShuttleProxy._getDescArray(leadingListName);
var a177=TrShuttleProxy._getDescArray(trailingListName);
TrShuttleProxy._resetToOriginalList(a174,a176,a171);
TrShuttleProxy._resetToOriginalList(a175,a177,a172);
TrShuttleProxy._makeList(a170,leadingListName);
TrShuttleProxy._makeList(a170,trailingListName);
return false;
}
TrShuttleProxy._getOriginalLists=function
(
a178,
a179
)
{
var a180=window['_'+a179+'_'+a178+'_orig'];
return a180;
}
TrShuttleProxy._resetToOriginalList=function
(
a181,
a182,
a183
)
{
if(a181==(void 0)||a183==(void 0))
return;
a183.selectedIndex=a181.selectedIndex;
var a184=0;
for(;a184<a181.options.length;a184++)
{
var a185=a181.options[a184].text;
var a186=a181.options[a184].value;
var a187=a181.options[a184].defaultSelected;
var a188=a181.options[a184].selected;
{
a183.options[a184]=new Option(a185,a186,
a187,a188);
a183.options[a184].defaultSelected=a187;
a183.options[a184].selected=a188;
}
if(a182!=(void 0))
a182[a184]=a181.descriptions[a184];
}
var a189=a183.options.length-1;
while(a189>=a184)
{
if(a182!=(void 0))
a182[a189]=null;
a183.options[a189]=null;
a189--;
}
}
TrShuttleProxy._copyLists=function(a190,a191)
{
var a192=new Object();
a192.leading=TrShuttleProxy._copyList(TrShuttleProxy._getListName(a190,true),a191);
a192.trailing=TrShuttleProxy._copyList(TrShuttleProxy._getListName(a190,false),a191);
return a192;
}
TrShuttleProxy._copyList=function(a193,a194)
{
if(a194==(void 0)||a193==(void 0))
return;
var a195=document.forms[a194].elements[a193];
if(a195==null)
return;
var a196=TrShuttleProxy._getDescArray(a193);
var a197=new Object();
a197.selectedIndex=a195.selectedIndex;
a197.options=new Array();
a197.descriptions=new Array();
for(var a198=0;a198<a195.options.length;a198++)
{
a197.options[a198]=new Option(a195.options[a198].text,
a195.options[a198].value,
a195.options[a198].defaultSelected,
a195.options[a198].selected);
a197.options[a198].defaultSelected=a195.options[a198].defaultSelected;
a197.options[a198].selected=a195.options[a198].selected;
if(a196!=null)
a197.descriptions[a198]=a196[a198];
}
return a197;
}

TrPanelPopup.showPopup=function(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7,
a8,
a9)
{
if(a0==null)
return;
var a10=TrPanelPopup._VISIBLE_POPUPS;
if(!a10)
a10=TrPanelPopup._VISIBLE_POPUPS=new Object();
if(a10[a0])
return;
if(a3=="hover")
a10[a0]=new TrHoverPopup();
else
a10[a0]=new TrClickPopup();
var a11=a10[a0];
var a12=document.getElementById(a0);
if(!a12)
return;
a11.setContent(a12);
a11.setTrigger(document.getElementById(a1));
a11.setModal(a5);
a11.setCentered(a4=='centered');
a11.setSize(a6,a7);
a11.setRelativeOffsetX(a8);
a11.setRelativeOffsetY(a9);
a11.showPopup(a2);
}
TrPanelPopup.hidePopup=function(a13)
{
a13=window.event||a13;
var a14=TrPanelPopup._VISIBLE_POPUPS;
if(!a14)
return;
var a15=a13.target||a13.srcElement;
while(a15)
{
var a16=a15.id;
if(a16)
{
var a17=a14[a16];
if(a17)
{
a17.hide(a13);
break;
}
}
a15=a15.parentNode;
}
}
function TrPanelPopup()
{
this._content=false;
this._trigger=false;
this._centered=false;
this._modal=false;
this._visible=false;
}
TrPanelPopup.prototype.getContent=function()
{
return this._content;
}
TrPanelPopup.prototype.setContent=function(a0)
{
this._content=a0;
if(this._content)
{
this._content.style.cssText="position: absolute; z-index: 5001; top: 0px; left: 0px; visibility:hidden; padding: 0px;";
}
}
TrPanelPopup.prototype.getTrigger=function()
{
return this._trigger;
}
TrPanelPopup.prototype.setTrigger=function(a1)
{
this._trigger=a1;
}
TrPanelPopup.prototype.setCentered=function(a2)
{
this._centered=a2;
}
TrPanelPopup.prototype.isModal=function()
{
return this._modal;
}
TrPanelPopup.prototype.setModal=function(a3)
{
this._modal=a3;
}
TrPanelPopup.prototype.setRelativeOffsetX=function(a4)
{
this._relativeOffsetX=parseInt(a4);
}
TrPanelPopup.prototype.getRelativeOffsetX=function()
{
return(this._relativeOffsetX)?this._relativeOffsetX:0;
}
TrPanelPopup.prototype.setRelativeOffsetY=function(a5)
{
this._relativeOffsetY=parseInt(a5);
}
TrPanelPopup.prototype.getRelativeOffsetY=function()
{
return(this._relativeOffsetY)?this._relativeOffsetY:0;
}
TrPanelPopup.prototype.isVisible=function()
{
return this._visible;
}
TrPanelPopup.prototype.returnValue=undefined;
TrPanelPopup.prototype.callback=undefined;
TrPanelPopup.prototype.callbackProps=undefined;
TrPanelPopup.prototype.show=function(a6)
{
if(!this.getContent())
return;
if(_pprBlocking)
return;
if(this.isVisible())
return;
this._calcPosition(a6);
if(this.isModal())
TrPanelPopup._showMask();
TrPanelPopup._showIeIframe();
this.getContent().style.visibility="visible";
this._visible=true;
}
TrPanelPopup.prototype.hide=function(a7)
{
if(!this.getContent())
return;
if(this.isModal())
TrPanelPopup._hideMask();
TrPanelPopup._hideIeIframe();
this.getContent().style.visibility="hidden";
this.getContent().style.left="0px";
this.getContent().style.top="0px";
if(this.callback)
{
try
{
this.callback(this.callbackProps,this.returnValue);
}
catch(ex)
{
alert("Error calling TrPanelPopup callback function:\n"+ex);
}
}
this._visible=false;
var a8=TrPanelPopup._VISIBLE_POPUPS;
if(a8)
delete a8[this.getContent().id];
}
TrPanelPopup.prototype.setSize=function(a9,a10)
{
if(a9)
{
var a11=parseInt(a9);
if(a11>0)
this.getContent().style.width=a11+"px";
}
if(a10)
{
var a11=parseInt(a10);
if(a11>0)
this.getContent().style.height=a11+"px";
}
}
TrPanelPopup._mask=undefined;
TrPanelPopup._showMask=function()
{
if(!TrPanelPopup._mask)
{
TrPanelPopup._mask=document.createElement('div');
TrPanelPopup._mask.name="TrPanelPopup._BlockingModalDiv";
TrPanelPopup._mask.id="af_dialog_blocked-area";
var a12=TrPage.getInstance();
TrPanelPopup._mask.className=a12.getStyleClass("af|dialog::blocked-area");
var a13="display:none;position: absolute; z-index: 5000;top: 0px;left: 0px;cursor: not-allowed;";
if(_agent.isIE&&_agent.version==7)
a13=a13+"background-color: white; filter: alpha(opacity=0);";
else
a13=a13+"background-color: transparent";
TrPanelPopup._mask.style.cssText=a13;
TrPanelPopup._mask.innerHTML="&nbsp;";
document.body.appendChild(TrPanelPopup._mask);
}
TrPanelPopup._registerMaskEvents();
TrPanelPopup._setMaskSize();
TrPanelPopup._mask.style.display="block";
}
TrPanelPopup._registerMaskEvents=function()
{
_addEvent(TrPanelPopup._mask,"click",TrPanelPopup._consumeMaskEvent);
_addEvent(window,"resize",TrPanelPopup._setMaskSize);
_addEvent(window,"scroll",TrPanelPopup._setMaskSize);
}
TrPanelPopup._hideMask=function()
{
_removeEvent(TrPanelPopup._mask,"click",TrPanelPopup._consumeMaskEvent);
_removeEvent(window,"resize",TrPanelPopup._setMaskSize);
_removeEvent(window,"scroll",TrPanelPopup._setMaskSize);
TrPanelPopup._mask.style.display="none";
}
TrPanelPopup.prototype._hitTest=function(a14,a15)
{
var a16=TrUIUtils._getElementBounds(a14);
return a16.x<=a15.pageX&&(a16.x+a16.w)>=a15.pageX&&
a16.y<=a15.pageY&&(a16.y+a16.h)>=a15.pageY;
}
TrPanelPopup.prototype._fitOnScreen=function(a17,a18)
{
var a19=TrUIUtils._getStyle(a17,'visibility');
a17.style.visibility='hidden';
var a20=TrUIUtils._getElementBounds(a17);
var a21=TrUIUtils._getElementLocation(a17.offsetParent);
var a22=TrUIUtils._getStyle(a17.offsetParent,'position');
var a23;
if(a22=='relative'||a22=='absolute')
{
a23={left:a21.x,top:a21.y};
}
else
{
a23={left:0,top:0};
}
var a24={
x:a20.x-(document.body.scrollLeft||document.documentElement.scrollLeft),
y:a20.y-(document.body.scrollTop||document.documentElement.scrollTop)
};
if(a20.x<0)
{
a17.style.left=(0-a23.left)+'px';
}
else if(a24.x+a20.w>a18.w)
{
a17.style.left=(a17.offsetLeft-(a24.x+a20.w-a18.w))+'px';
}
if(a20.y<0)
{
a17.style.top=(0-a23.top)+'px';
}
else if(a24.y+a20.h>a18.h)
{
a17.style.top=(a17.offsetTop-(a24.y+a20.h-a18.h))+'px';
}
a17.style.visibility=a19;
}
TrPanelPopup.prototype._getEventPosition=function(a25)
{
var a26={
clientX:a25.clientX,
clientY:a25.clientY,
pageX:a25.pageX,
pageY:a25.pageY
};
if(a26.pageX==null)
{
a26.pageX=a25.clientX
+(document.body.scrollLeft||document.documentElement.scrollLeft);
a26.pageY=a25.clientY
+(document.body.scrollTop||document.documentElement.scrollTop);
}
return a26;
}
TrPanelPopup.prototype._centerOnScreen=function(a27,a28)
{
a27.style.position='absolute';
var a29=TrUIUtils._getStyle(a27,'visibility');
a27.style.visibility='hidden';
var a30=TrUIUtils._getElementLocation(a27.offsetParent);
var a31=TrUIUtils._getElementBounds(a27);
var a32=TrUIUtils._getStyle(a27.offsetParent,'position');
var a33;
if(a32=='relative'||a32=='absolute')
{
a33={left:a30.x,top:a30.y};
}
else
{
a33={left:0,top:0};
}
var a34={
x:a31.x-(document.body.scrollLeft||document.documentElement.scrollLeft),
y:a31.y-(document.body.scrollTop||document.documentElement.scrollTop)
};
a27.style.left=Math.max(0,
(a28.w/2-a27.clientWidth/2)
-a33.left
+(a31.x-a34.x))+'px';
a27.style.top=Math.max(0,
(a28.h/2-a27.clientHeight/2)
-a33.top
+(a31.y-a34.y))+'px';
a27.style.visibility=a29;
}
TrPanelPopup.prototype._getOffsetParent=function()
{
for(var a35=this.getContent();a35!=null;
a35=a35.parentNode)
{
if(a35.tagName&&'form'==a35.tagName.toLowerCase())
{
return a35;
}
}
return document.body;
}
TrPanelPopup.prototype._calcPosition=function(a36)
{
var a37=this.getContent();
a36=window.event||a36;
var a38=this._getOffsetParent();
var a39=TrUIUtils._getWindowClientSize();
if(!a37.origParent)
{
a37.origParent=a37.parentNode;
}
a38.appendChild(a37);
if(!this._centered)
{
var a40=this._getEventPosition(a36);
var a41=TrUIUtils._getElementLocation(a37.offsetParent);
var a42=TrUIUtils._getStyle(a37.offsetParent,'position');
var a43;
if(a42=='relative'||a42=='absolute')
{
a43={left:a41.x,top:a41.y};
}
else
{
a43={left:0,top:0};
}
a37.style.left=(a40.pageX-a43.left+this.getRelativeOffsetX()-
this._getSideOffset(a37,"Left"))+'px';
a37.style.top=(a40.pageY-a43.top+this.getRelativeOffsetY()-
this._getSideOffset(a37,"Top"))+'px';
}
if(this._centered)
{
this._centerOnScreen(a37,a39);
}
else
{
this._fitOnScreen(a37,a39);
}
if(!this.isModal())
{
var a44=TrUIUtils._getElementBounds(a37);
TrPanelPopup._resizeIeIframe(a44.x,a44.y,a44.w,a44.h);
}
}
TrPanelPopup.prototype._getSideOffset=function(a45,a46)
{
var a47=["border","padding","margin"];
var a48=0;
for(var a49=0;a49<a47.length;++a49)
{
var a50=TrUIUtils._getStyle(a45,a47[a49]+a46);
a50=parseInt(a50);
if(!isNaN(a50))
{
a48+=a50;
}
}
return a48;
}
TrPanelPopup._consumeMaskEvent=function(a51)
{
return false;
}
TrPanelPopup._setMaskSize=function()
{
if(!TrPanelPopup._mask)
return;
var a52=TrUIUtils._getWindowClientSize();
var a53=document.documentElement.scrollWidth||document.body.scrollWidth;
var a54=document.documentElement.scrollHeight||document.body.scrollHeight;
var a55=Math.max(a52.w,a53);
var a56=Math.max(a52.h,a54);
TrPanelPopup._mask.style.width=a55+"px";
TrPanelPopup._mask.style.height=a56+"px";
TrPanelPopup._resizeIeIframe(0,0,a55,a56);
}
TrPanelPopup._showIeIframe=function()
{
if(_agent.isIE&&_agent.version<7)
{
TrPanelPopup._initIeIframe();
TrPanelPopup._maskIframe.style.display="block";
}
}
TrPanelPopup._hideIeIframe=function()
{
if(_agent.isIE&&_agent.version<7)
{
TrPanelPopup._initIeIframe();
TrPanelPopup._maskIframe.style.display="none";
}
}
TrPanelPopup._resizeIeIframe=function(a57,a58,a59,a60)
{
if(_agent.isIE&&_agent.version<7)
{
TrPanelPopup._initIeIframe();
TrPanelPopup._maskIframe.style.left=a57;
TrPanelPopup._maskIframe.style.top=a58;
TrPanelPopup._maskIframe.style.width=a59;
TrPanelPopup._maskIframe.style.height=a60;
}
}
TrPanelPopup._initIeIframe=function()
{
if(!TrPanelPopup._maskIframe)
{
TrPanelPopup._maskIframe=document.createElement('iframe');
TrPanelPopup._maskIframe.name="TrPanelPopup._ieOnlyZIndexIframe";
TrPanelPopup._maskIframe.style.cssText="display: none; left: 0px; position: absolute; top: 0px; z-index: 4999;";
TrPanelPopup._maskIframe.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
if(_agent.isIE)
{
TrPanelPopup._maskIframe.src="javascript:false;";
}
document.body.appendChild(TrPanelPopup._maskIframe);
}
}
function TrHoverPopup()
{
TrPanelPopup.call(this);
this._hoverCallbackFunction=TrUIUtils.createCallback(this,this.hidePopup);
}
TrHoverPopup.prototype=new TrPanelPopup();
TrHoverPopup.prototype.showPopup=function(a0)
{
_addEvent(document.body,"mousemove",this._hoverCallbackFunction);
this.show(a0);
}
TrHoverPopup.prototype.hidePopup=function(a1)
{
a1=window.event||a1;
var a2=this.getContent();
var a3=this.getTrigger();
var a4=this._getEventPosition(a1);
if((this._hitTest(a2,a4)||
this._hitTest(a3,a4)))
{
return;
}
_removeEvent(document.body,"mousemove",this._hoverCallbackFunction);
this.hide(a1);
if(a2.origParent)
{
a2.origParent.appendChild(a2);
}
}
TrHoverPopup.prototype.isModal=function()
{
return false;
}
function TrClickPopup()
{
TrPanelPopup.call(this);
this._clickCallbackFunction=TrUIUtils.createCallback(this,this.hidePopup);
}
TrClickPopup.prototype=new TrPanelPopup();
TrClickPopup.prototype.showPopup=function(a0)
{
if(!this.isModal())
_addEvent(document,"click",this._clickCallbackFunction);
this.show(a0);
}
TrClickPopup.prototype.hidePopup=function(a1)
{
a1=window.event||a1;
var a2=a1.target||a1.srcElement;
while(a2)
{
if(a2==this.getContent()||
a2==this.getTrigger())
{
break;
}
a2=a2.parentNode;
}
if(!a2)
{
_removeEvent(document,"click",this._clickCallbackFunction);
this.hide(a1);
if(this.getContent().origParent)
{
this.getContent().origParent.appendChild(this.getContent());
}
}
}

function TrPopupDialog()
{
var a0=TrPage.getInstance();
var a1=document.createElement("div");
a1.style.cssText="visibility:hidden; position: absolute;";
a1.className=a0.getStyleClass("af|dialog::container");
var a2=document.createElement("div");
a2.className=a0.getStyleClass("af|dialog::title-bar");
a1.appendChild(a2);
var a3=document.createElement("div");
a3.style.cssText="float:left;";
a3.className=a0.getStyleClass("af|dialog::title-text");
a2.appendChild(a3);
var a4=document.createElement("div");
a4.style.cssText="float:right;";
a4.className=a0.getStyleClass("af|dialog::close-icon");
_addEvent(a4,"click",TrPopupDialog._returnFromDialog);
a2.appendChild(a4);
var a5=document.createElement("div");
a5.style.cssText="clear:both;";
a2.appendChild(a5);
var a6=document.createElement("iframe");
a6.name="_blank";
a6.frameBorder="0";
a6.className=a0.getStyleClass("af|dialog::content");
a1.appendChild(a6);
this._iframe=a6;
this._outerDiv=a1;
this._titleTextDiv=a3;
document.body.appendChild(a1);
TrPanelPopup.call(this);
this.setModal(true);
this.setCentered(true);
this.setContent(a1);
this._fixedSize=false;
}
TrPopupDialog.prototype=new TrPanelPopup();
TrPopupDialog.prototype.setTitle=function(a7)
{
if(a7)
{
this._titleTextDiv.innerHTML=a7;
}
else
{
this._titleTextDiv.innerHTML="";
}
}
TrPopupDialog.prototype.setDestination=function(a8)
{
this._iframe.src=a8;
}
TrPopupDialog.prototype.setSize=function(a9,a10)
{
this._resizeIFrame(a9,a10);
if(a9==null)
{
this._variableWidth=true;
}
else
{
this._variableWidth=false;
this._fixedSize=true;
}
if(a10==null)
{
this._variableHeight=true;
}
else
{
this._variableHeight=false;
this._fixedSize=true;
}
}
TrPopupDialog.getInstance=function()
{
return TrPopupDialog.DIALOG;
}
TrPopupDialog.prototype._destroy=function()
{
var a11=this._outerDiv;
if(a11)
{
delete this._outerDiv;
a11.parentNode.removeChild(a11);
}
if(this._iframe)
delete this._iframe;
if(this._titleTextDiv)
delete this._titleTextDiv;
}
TrPopupDialog.prototype._resizeIFrame=function(a12,a13)
{
if(a13!=null)
{
this._iframe.height=a13+"px";
}
if(a12!=null)
{
this._iframe.width="100%";
this._outerDiv.style.width=a12+"px";
}
this._calcPosition(false);
}
TrPopupDialog._initDialogPage=function()
{
var a14;
try
{
a14=parent.TrPopupDialog.DIALOG;
}
catch(err)
{
}
if(!a14)
return;
a14.setTitle(document.title);
if(a14.isVisible())
return;
if(!a14._fixedSize)
{
if(_agent.isIE)
{
a14._resizeIFrame(
a14._iframe.Document.body.scrollWidth+40,
a14._iframe.Document.body.scrollHeight+40);
}
else
{
a14._resizeIFrame(
a14._iframe.contentDocument.body.offsetWidth+40,
a14._iframe.contentDocument.body.offsetHeight+40);
}
}
else if(a14._variableWidth||a14._variableHeight)
{
if(a14._variableWidth)
{
if(_agent.isIE)
{
a14._resizeIFrame(a14._iframe.Document.body.scrollWidth+40,null);
}
else
{
a14._resizeIFrame(a14._iframe.contentDocument.body.offsetWidth+40,null);
}
}
if(a14._variableHeight)
{
if(_agent.isIE)
{
a14._resizeIFrame(null,a14._iframe.Document.body.scrollHeight+40);
}
else
{
a14._resizeIFrame(null,a14._iframe.contentDocument.body.offsetHeight+40);
}
}
}
a14.show();
}
TrPopupDialog._returnFromDialog=function()
{
var a15=TrPopupDialog.DIALOG;
if(a15)
{
a15.hide();
window.setTimeout(TrUIUtils.createCallback(
a15,TrPopupDialog.prototype._destroy),100);
TrPopupDialog.DIALOG=undefined;
}
else
{
alert("returnFromDialog(): Error - Current popup is not a dialog");
}
}
TrPopupDialog._returnFromDialogAndSubmit=function(a16,a17)
{
if(a16)
{
var a18=a16['formName'];
var a19=a16['postback'];
_submitPartialChange(a18,0,{rtrn:a19});
}
}
TrPopupDialog._launchDialog=function(
a20,
a21,
a22,
a23)
{
var a24=TrPopupDialog.DIALOG;
if(!a24)
{
a24=TrPopupDialog.DIALOG=new TrPopupDialog();
}
a24.callback=a22;
a24.callbackProps=a23;
if(a21&&a21['width']&&a21['height'])
{
a24.setSize(a21['width'],a21['height']);
}
else if(a21&&a21['width'])
{
a24.setSize(a21['width'],null);
}
else if(a21&&a21['height'])
{
a24.setSize(null,a21['height']);
}
a24.setDestination(a20);
}

function TrPage()
{
this._requestQueue=new TrRequestQueue(window);
this._loadedLibraries=TrPage._collectLoadedLibraries();
}
TrPage._VIEW_STATE_ID="javax.faces.ViewState";
TrPage.getInstance=function()
{
if(TrPage._INSTANCE==null)
TrPage._INSTANCE=new TrPage();
return TrPage._INSTANCE;
}
TrPage.prototype.getRequestQueue=function()
{
return this._requestQueue;
}
TrPage.prototype.sendPartialFormPost=function(a0,a1,a2,a3)
{
var a4=this.getRequestQueue();
if(!this._xhrInited)
{
this._xhrInited=true;
if(this._noPprOverJsfAjax)
{
a4.__disableJsfBuiltInAjaxForXhr();
}
else if(a4.__useJsfBuiltInAjaxForXhr())
{
jsf.ajax.addOnEvent(TrUIUtils.createCallback(this,this._jsfAjaxCallback));
}
}
a4.sendFormPost(this,this._requestStatusChanged,a0,a1,a2,a3);
}
TrPage.prototype._requestStatusChanged=function(a5)
{
if(a5.getStatus()==TrXMLRequestEvent.STATUS_COMPLETE)
{
var a6=a5.getResponseStatusCode();
if(a6>=200&&a6<300)
{
_pprStopBlocking(window);
if(a5.isPprResponse())
{
var a7=a5.getResponseXML();
if(a7!=null)
{
if(a5.isJsfAjaxRequest())
{
this._handleJsfAjaxResponse(a5);
}
else
{
this._handlePprResponse(a5,a7);
}
}
}
else
{
}
}
else if(a6>=400)
{
_pprStopBlocking(window);
}
}
if(a5.isJsfAjaxRequest())
{
this._handleJsfAjaxResponse(a5);
}
}
TrPage.prototype._handleJsfAjaxResponse=function(a8)
{
try
{
var a9=a8.getResponseStatusCode();
if(a9>=200&&a9<300)
{
if(this._ajaxOldDomElements)
{
this._notifyDomReplacementListeners(this._ajaxOldDomElements);
}
if(this._activeNode)
{
var a10=this._activeNode;
delete this._activeNode;
var a11=-1;
if(a10.id)
{
for(var a12=0,size=this._ajaxOldDomElements.length;a12<size;++a12)
{
if(TrPage._isDomAncestorOf(a10,this._ajaxOldDomElements[a12].element))
{
a11=a12;
break;
}
}
if(a11>=0)
{
a10=document.getElementById(a10.id);
window._trActiveElement=a10;
if(a10)
{
a10.focus();
}
}
}
}
}
}
finally
{
delete this._ajaxOldDomElements;
delete this._activeNode;
}
}
TrPage.prototype._handlePprResponse=function(a13,a14)
{
var a15=a14.documentElement;
var a16=TrPage._getNodeName(a15);
if(a16=="partial-response")
{
var a17=a15.childNodes;
var a18=a17.length;
for(var a19=0;a19<a18;a19++)
{
var a20=a17[a19];
switch(TrPage._getNodeName(a20))
{
case"changes":
for(var a21=0,size=a20.childNodes.length;a21<size;++a21)
{
var a22=a20.childNodes[a21];
switch(TrPage._getNodeName(a22))
{
case"update":
this._handlePprResponseFragment(a22,a13.getFormId());
break;
case"eval":
this._handlePprResponseScript(a22);
break;
case"extension":
if(a22.getAttribute("id")=="tr-script-library")
{
this._handlePprResponseLibrary(a22);
}
break;
default:
break;
}
}
break;
case"error":
var a23=TrPage._getTextContent(a20.firstChild.nextSibling);
if(a23==null)
a23="Unknown error during PPR";
alert(a23);
return;
case"redirect":
var a24=a20.getAttribute("url");
window.location.href=a24;
}
}
}
else
{
window.location.reload(true);
}
}
TrPage.prototype.__disablePprOverJsfAjax=function()
{
this._noPprOverJsfAjax=true;
}
TrPage.prototype._addResetFields=function(a25,a26)
{
var a27=this._resetFields;
if(!a27)
{
a27=new Object();
this._resetFields=a27;
}
var a28=a27[a25];
if(!a28)
{
a28=new Object();
a27[a25]=a28;
}
for(var a29=0;a29<a26.length;a29++)
{
a28[a26[a29]]=true;
}
}
TrPage.prototype._resetHiddenValues=function(a30)
{
var a31=this._resetFields;
if(a31)
{
var a32=a31[a30.getAttribute("name")];
if(a32)
{
for(var a33 in a32)
{
var a34=a30[a33];
if(!a34)
a34=a30.elements.currField;
if(a34)
a34.value='';
}
}
}
}
TrPage.prototype._addResetCalls=function(a35,a36)
{
var a37=this._resetCalls;
if(!a37)
{
a37=new Object();
this._resetCalls=a37;
}
var a38=a37[a35];
if(!a38)
{
a38=new Object();
a37[a35]=a38;
}
for(var a39 in a36)
{
a38[a39]=a36[a39];
}
}
TrPage.prototype._resetForm=function(form)
{
var resetCalls=this._resetCalls;
if(!resetCalls)
return false;
var formReset=resetCalls[form.getAttribute("name")];
if(!formReset)
return false;
var doReload=false;
for(var k in formReset)
{
var trueResetCallback=unescape(formReset[k]);
if(eval(trueResetCallback))
doReload=true;
}
return doReload;
}
TrPage._getNodeName=function(a40)
{
var a41=a40.nodeName;
if(!a41)
a41=a40.tagName;
return a41;
}
TrPage.prototype.__handlePprResponseAction=function(a42)
{
var a43=window.document;
a43.forms[0].action=a42;
}
TrPage.prototype._handlePprResponseFragment=function(a44,a45)
{
var a46=window.document;
if(a44.getAttribute("id")==TrPage._VIEW_STATE_ID)
{
this._updateViewState(a46,a44,a45);
return;
}
var a47;
var a48;
var a49=null;
if(_agent.isWindowsMobile6)
{
var a50=a44.childNodes[0];
if(!a50)
return;
var a51="";
for(var a52=0,size=a44.childNodes.length;a52<size;++a52)
{
a51+=a44.childNodes[a52].data;
}
tempDiv=a46.createElement("div");
tempDiv.id="tempDiv";
tempDiv.hidden="true";
var a53=a46.body;
a53.appendChild(tempDiv);
tempDiv.innerHTML=a51;
var a54=TrPage._getFirstElementWithId(tempDiv);
a47=_getElementById(a46,a54.id);
if(!a47)
{
return;
}
a48=_getActiveElement();
if(a48&&TrPage._isDomAncestorOf(a48,a47))
a49=a48.id;
a47.parentNode.insertBefore(a54,a47);
a47.innerHTML="";
a47.parentNode.removeChild(a47);
tempDiv.innerHTML="";
a53.removeChild(tempDiv);
}
else
{
var a54=this._getFirstElementFromFragment(a44);
if(!a54)
return;
var a55=a54.getAttribute("id");
if(!a55)
return;
a47=_getElementById(a46,a55);
a48=_getActiveElement();
if(a48&&TrPage._isDomAncestorOf(a48,a47))
a49=a48.id;
if(a47)
a47.parentNode.replaceChild(a54,a47);
}
var a56=this._domReplaceListeners;
if(a56)
{
for(var a52=0;a52<a56.length;a52+=2)
{
var a57=a56[a52];
var a58=a56[a52+1];
if(a58!=null)
a57.call(a58,a47,a54);
else
a57(a47,a54);
}
}
if(a49)
{
a48=a46.getElementById(a49);
if(a48&&a48.focus)
{
a48.focus();
window._trActiveElement=a48;
}
}
}
TrPage.prototype._updateViewState=function(a59,a60,a61)
{
var a62=null;
if(a61)
a62=a59.getElementById(a61);
if(!a62)
a62=a59.forms[0];
if(!a62)
return;
var a63=a62.elements[TrPage._VIEW_STATE_ID];
if(!a63)
{
a63=a59.createElement("input");
a63.type='hidden';
if(_agent.isIE&&_agent.version<8)
{
a63.id=TrPage._VIEW_STATE_ID;
}
a63.name=TrPage._VIEW_STATE_ID;
a62.appendChild(a63);
}
a63.value=TrPage._getTextContent(a60);
}
TrPage._isDomAncestorOf=function(a64,a65)
{
while(a64)
{
if(a64==a65)
return true;
var a66=a64.parentNode;
if(a66==a64)
break;
a64=a66;
}
return false;
}
TrPage.prototype.__replaceDomElement=function(a67,a68)
{
a68.parentNode.replaceChild(a67,a68);
}
TrPage.prototype._getFirstElementFromFragment=function(a69)
{
var a70=a69.childNodes;
var a71="";
for(var a72=0,size=a70.length;a72<size;++a72)
{
if(a70[a72].nodeType==4)
{
a71+=a70[a72].data;
}
}
var a73=window.document;
var a74=a73.createElement("div");
a74.innerHTML=a71;
return TrPage._getFirstElementWithId(a74);
}
TrPage._getFirstElementWithId=function(a75)
{
var a76=a75.childNodes;
var a77=a76.length;
for(var a78=0;a78<a77;a78++)
{
var a79=a76[a78];
if(a79.id)
{
if(!_agent.supportsNodeType)
{
return a79;
}
else if(a79.nodeType==1)
{
return a79;
}
}
var a80=TrPage._getFirstElementWithId(a79);
if(a80!=null)
{
return a80;
}
}
return null;
}
TrPage.prototype._loadScript=function(source)
{
var loadedLibraries=this._loadedLibraries;
if(loadedLibraries[source])
return;
loadedLibraries[source]=true;
var xmlHttp=new TrXMLRequest();
xmlHttp.setSynchronous(true);
xmlHttp.send(source,null);
if(xmlHttp.getStatus()==200)
{
var responseText=xmlHttp.getResponseText();
if(responseText)
{
if(_agent.isIE||_agent.isWindowsMobile6)
{
try
{
window.execScript(responseText);
}catch(e){}
}
else
window.eval(responseText);
}
}
xmlHttp.cleanup();
}
TrPage.prototype._handlePprResponseScript=function(scriptNode)
{
var source=scriptNode.getAttribute("src");
if(source)
{
this._loadScript(source);
}
else
{
var nodeText=TrPage._getTextContent(scriptNode);
if(nodeText)
{
if(_agent.isIE||_agent.isWindowsMobile6)
{
try
{
window.execScript(nodeText);
}
catch(e){}
}
else if(_agent.isBlackBerry)
{
var head=document.getElementsByTagName("head")[0];
var scriptElement=document.createElement("script");
scriptElement.type="text/javascript";
scriptElement.text=nodeText;
head.insertBefore(scriptElement,head.firstChild);
head.removeChild(scriptElement);
}
else
window.eval(nodeText);
}
}
}
TrPage.prototype._handlePprResponseLibrary=function(a81)
{
var a82=TrPage._getTextContent(a81);
this._loadScript(a82);
}
TrPage._getTextContent=function(a83)
{
if(_agent.isIE||_agent.isWindowsMobile6)
{
var a84=a83.innerText;
if(a84==undefined)
a84=a83.text;
return a84;
}
if(_agent.isSafari||_agent.isBlackBerry)
{
var a85="";
var a86=a83.firstChild;
while(a86)
{
var a87=a86.nodeType;
if((a87==3)||(a87==4))
a85=a85+a86.data;
a86=a86.nextSibling;
}
return a85;
}
return a83.textContent;
}
TrPage._collectLoadedLibraries=function()
{
if(!_agent.supportsDomDocument)
{
return null;
}
else
{
var a88=new Object();
var a89=window.document;
var a90=a89.getElementsByTagName("script");
if(a90!=null)
{
for(var a91=0;a91<a90.length;a91++)
{
var a92=a90[a91].getAttribute("src");
if(a92)
{
a88[a92]=true;
}
}
}
return a88;
}
}
TrPage.prototype.addDomReplaceListener=function(a93,a94)
{
var a95=this._domReplaceListeners;
if(!a95)
{
a95=new Array();
this._domReplaceListeners=a95;
}
a95.push(a93);
a95.push(a94);
}
TrPage.prototype.removeDomReplaceListener=function(a96,a97)
{
var a98=this._domReplaceListeners;
var a99=a98.length;
for(var a100=0;a100<a99;a100++)
{
var a101=a98[a100];
a100++;
if(a101==a96)
{
var a102=a98[a100];
if(a102===a97)
{
a98.splice(a100-1,2);
break;
}
}
}
if(a98.length==0)
{
this._domReplaceListeners=null;
}
}
TrPage.prototype.addStyleClassMap=function(a103)
{
if(!a103)
return;
if(!this._styleClassMap)
this._styleClassMap=new Object();
for(var a104 in a103)
this._styleClassMap[a104]=a103[a104];
}
TrPage.prototype.getStyleClass=function(a105)
{
if(a105&&this._styleClassMap)
{
var a106=this._styleClassMap[a105];
if(a106)
return a106;
}
return a105;
}
TrPage._autoSubmit=function(a107,a108,a109,a110,a111)
{
if(_agent.isIE)
{
if(a109["type"]=="hidden")
a109=window.event;
}
var a112=true;
if(_TrEventBasedValidation)
a112=_validateInput(a109,true);
if(a112)
{
if(!a111)
a111=new Object();
a111.event="autosub";
a111.source=a108;
_submitPartialChange(a107,a110,a111,a109);
}
}
TrPage.prototype._jsfAjaxCallback=function(a113)
{
if(a113.status=="complete")
{
this._ajaxOldDomElements=this._getDomToBeUpdated(a113.responseCode,a113.responseXML);
this._activeNode=_getActiveElement();
}
}
TrPage.prototype._notifyDomReplacementListeners=function(a114)
{
var a115=this._domReplaceListeners;
if(!a115||a115.length==0)
{
return;
}
for(var a116=0,isize=a114.length;a116<isize;++a116)
{
var a117=a114[a116].element;
var a118=a114[a116].id;
var a119=a118==null?document.body:document.getElementById(a118);
for(var a120=0,jsize=a115.length;a120<jsize;++a120)
{
var a121=a115[a120];
var a122=a115[++a120];
if(a122!=null)
{
a121.call(a122,a117,a119);
}
else
{
a121(a117,a119);
}
}
}
}
TrPage.prototype._getDomToBeUpdated=function(a123,a124)
{
if(a123<200||a123>=300)
{
return null;
}
var a125=a124.getElementsByTagName("partial-response");
var a126=a125.length?a125[0].firstChild:null;
if(!a126||a126.nodeName!=="changes")
{
return null;
}
var a127=a126.childNodes;
var a128=[];
for(var a129=0,size=a127.length;a129<size;++a129)
{
var a130=a127[a129];
if(a130.nodeName!=="update")
{
continue;
}
var a131=a130.getAttribute("id");
if(a131==TrPage._VIEW_STATE_ID)
{
continue;
}
if(a131=="javax.faces.ViewRoot"||a131=="javax.faces.ViewBody")
{
a128.push(
{
"id":null,"element":document.body
});
}
else
{
a128.push(
{
"id":a131,"element":document.getElementById(a131)
});
}
}
return a128;
}

function TrStatusIndicator()
{
}
TrStatusIndicator._register=function(a0)
{
if(!TrStatusIndicator._registered)
{
TrStatusIndicator._registered=new Object();
TrPage.getInstance().getRequestQueue().addStateChangeListener(
TrStatusIndicator._handleStateChange);
}
TrStatusIndicator._registered[a0]=true;
}
TrStatusIndicator._handleStateChange=function(a1)
{
var a2=a1==TrRequestQueue.STATE_BUSY;
for(id in TrStatusIndicator._registered)
{
var a3=document.getElementById(id+"::busy");
if(!a3)
continue;
a3.style.display=a2?"inline":"none";
var a4=document.getElementById(id+"::ready");
a4.style.display=a2?"none":"inline";
}
}

function TrRequestQueue(a0)
{
this._state=TrRequestQueue.STATE_READY;
this._requestQueue=new Array();
this._stateChangeListeners=null;
this._window=a0;
this._useJsfBuiltInAjaxForXhr=(_agent.useJsfAjax&&typeof jsf!="undefined");
}
TrRequestQueue.STATE_READY=0;
TrRequestQueue.STATE_BUSY=1;
TrRequestQueue._MULTIPART_FRAME="_trDTSFrame";
TrRequestQueue._XMLHTTP_TYPE=0;
TrRequestQueue._MULTIPART_TYPE=1;
TrRequestQueue.prototype.dispose=function()
{
this._requestQueue=null;
this._stateChangeListeners=null;
this._window=null;
}
TrRequestQueue._RequestItem=function(
a1,
a2,
a3,
a4,
a5,
a6,
a7,
a8,
a9
)
{
this._type=a1;
this._context=a2;
this._actionURL=a3;
this._headerParams=a4;
this._content=a5;
this._method=a6;
this._event=a7;
this._source=a8;
this._formId=a9;
}
TrRequestQueue.prototype._broadcastRequestStatusChanged=function(
a10,a11,a12)
{
if(a11)
{
try
{
a11.call(a10,a12);
}
catch(e)
{
TrRequestQueue._logError(
"Error ",e," delivering XML request status changed to ",
a11);
}
}
}
TrRequestQueue.prototype._addRequestToQueue=function(
a13,
a14,
a15,
a16,
a17,
a18,
a19,
a20,
a21
)
{
var a22=new TrRequestQueue._RequestItem(
a13,a14,a16,a18,a17,
a15,a19,a20,a21);
if(this._useJsfBuiltInAjaxForXhr&&a13==TrRequestQueue._XMLHTTP_TYPE)
{
this._state=TrRequestQueue.STATE_BUSY;
this._broadcastStateChangeEvent(TrRequestQueue.STATE_BUSY);
this._doXmlHttpRequest(a22);
return;
}
this._requestQueue.push(a22);
try
{
var a23=new TrXMLRequestEvent(
TrXMLRequestEvent.STATUS_QUEUED,
null,
a20);
this._broadcastRequestStatusChanged(a14,a15,a23);
}
catch(e)
{
TrRequestQueue._logError("Error on listener callback invocation - STATUS_QUEUED",e);
}
if(this._state==TrRequestQueue.STATE_READY)
{
this._state=TrRequestQueue.STATE_BUSY;
this._broadcastStateChangeEvent(TrRequestQueue.STATE_BUSY);
this._doRequest();
}
}
TrRequestQueue.prototype.sendFormPost=function(
a24,
a25,
a26,
a27,
a28,
a29
)
{
var a30;
try
{
a30=a26.getAttribute("_trinPPRAction");
}
catch(e){;}
var a31=a30?a30:a26.action;
if(this._isMultipartForm(a26))
{
this.sendMultipartRequest(a24,a25,a31,a26,a27);
}
else
{
if(_agent.isIE)
this._autoCompleteForm(a26);
if(this._useJsfBuiltInAjaxForXhr)
{
this.sendRequest(a24,a25,a31,a27,a28,a29,
a27?a27.source:null,a26.id);
}
else
{
var a32=this._getPostbackContent(a26,a27);
this.sendRequest(a24,a25,a31,a32,a28,a29,
a27?a27.source:null,a26.id);
}
}
}
TrRequestQueue.prototype._autoCompleteForm=function(a33)
{
var a34=window.external;
if(a34&&(typeof a34.AutoCompleteSaveForm!="undefined"))
{
try
{
a34.AutoCompleteSaveForm(a33);
}
catch(e)
{
}
}
}
TrRequestQueue.prototype._isMultipartForm=function(a35)
{
if(!_agent.supportsDomDocument)
{
return false;
}
if(a35.enctype.toLowerCase()!="multipart/form-data")
return false;
var a36=a35.getElementsByTagName("input"),
inputCount=a36.length,multiPartForm=null;
for(var a37=0;a37<inputCount;++a37)
{
var a38=a36[a37];
if(a38.type=="file"&&a38.value)
{
return true;
}
}
return false;
}
TrRequestQueue.prototype._getPostbackContent=function(a39,a40)
{
var a41=a39.elements;
var a42={};
if(a41)
{
for(var a43=0;a43<a41.length;a43++)
{
var a44=a41[a43];
if(a44.name&&!a44.disabled&&!(a44.tagName=="INPUT"&&a44.type=="submit"))
{
if(a44.options)
{
a42[a44.name]=new Array();
for(var a45=0;a45<a44.options.length;a45++)
{
var a46=a44.options[a45];
if(a46.selected)
{
var a47=(a46.value===null)?
a46.text:a46.value;
a42[a44.name].push(a47);
}
}
}
else if(!((a44.type=="checkbox"||
a44.type=="radio")&&
!a44.checked))
{
var a48=a42[a44.name];
if(a48)
{
if(!a48.join)
{
var a49=new Array();
a49.push(a48);
a42[a44.name]=a49;
a48=a49;
}
a48.push(a44.value);
}
else
{
a42[a44.name]=a44.value;
}
}
}
}
}
for(var a50 in a40)
{
var a51=a40[a50];
a42[a50]=a40[a50];
}
var a52="";
for(var a50 in a42)
{
var a53=a42[a50];
if(a53!=null)
{
if(a53.join)
{
var a54=a53;
for(var a55=0;a55<a54.length;a55++)
{
a52=TrRequestQueue._appendUrlFormEncoded(a52,a50,a54[a55]);
}
}
else
{
a52=TrRequestQueue._appendUrlFormEncoded(a52,a50,a53);
}
}
}
return a52;
}
TrRequestQueue._appendUrlFormEncoded=function(
a56,
a57,
a58)
{
if(a56.length>0)
{
a56=a56+"&";
}
return a56+a57+"="+a58.toString().replace(/\%/g,'%25')
.replace(/\+/g,'%2B')
.replace(/\//g,'%2F')
.replace(/\&/g,'%26')
.replace(/\"/g,'%22')
.replace(/\'/g,'%27');
}
TrRequestQueue.prototype.sendRequest=function(
a59,
a60,
a61,
a62,
a63,
a64,
a65,
a66
)
{
this._addRequestToQueue(TrRequestQueue._XMLHTTP_TYPE,a59,a60,a61,a62,
a63,a64,a65,a66);
}
TrRequestQueue.prototype.sendMultipartRequest=function(
a67,
a68,
a69,
a70,
a71
)
{
var a72=
{"htmlForm":a70,"params":a71,"context":a67,"method":a68};
this._addRequestToQueue(TrRequestQueue._MULTIPART_TYPE,a72,null,a69,
a71?a71.source:null,a70.id);
}
TrRequestQueue.prototype._doRequest=function()
{
var a73=this._requestQueue.shift();
switch(a73._type)
{
case TrRequestQueue._XMLHTTP_TYPE:
this._doXmlHttpRequest(a73);
break;
case TrRequestQueue._MULTIPART_TYPE:
this._doRequestThroughIframe(a73);
break;
}
}
TrRequestQueue.prototype._doXmlHttpRequest=function(a74)
{
var a75;
if(this._useJsfBuiltInAjaxForXhr)
{
a75=new TrXMLJsfAjaxRequest(a74._event,a74._content,
a74._formId);
}
else
{
a75=new TrXMLRequest();
}
a75.__dtsRequestContext=a74._context;
a75.__dtsRequestMethod=a74._method;
a75.__dtsRequestSource=a74._source;
a75.__dtsRequestFormId=a74._formId;
var a76=TrUIUtils.createCallback(this,this._handleRequestCallback);
a75.setCallback(a76);
if(!this._useJsfBuiltInAjaxForXhr)
{
a75.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
var a77=a74._headerParams;
if(a77!=null)
{
for(var a78 in a77)
{
var a79=a77[a78];
if(a79["join"])
a79=a79.join(',')
a75.setRequestHeader(a78,a79);
}
}
}
a75.send(a74._actionURL,a74._content);
}
TrRequestQueue.prototype._doRequestThroughIframe=function(a80)
{
var a81=a80._context.htmlForm;
var a82=a80._actionURL;
var a83=a80._context.params;
var a84=TrRequestQueue._MULTIPART_FRAME;
var a85=this._getDomDocument();
var a86=a85.getElementById(a84),iframeDoc;
var a87=_agent.isIE;
if(!a86)
{
a86=a85.createElement('iframe');
a86.name=a84;
a86.id=a84;
var a88=a86.style;
a88.top=a88.left='0px';
a88.width=a88.height='1px'
a88.position='absolute';
a88.visibility="hidden";
a85.body.appendChild(a86);
}
if(a87)
{
a86=a85.frames[a84];
a86.name=a84;
iframeDoc=a86.document;
}
else if(_agent.isSafari)
{
iframeDoc=a86.document;
}
else
{
iframeDoc=a86.contentDocument;
}
if(iframeDoc&&iframeDoc.firstChild)
iframeDoc.removeChild(iframeDoc.firstChild);
this._source=a80.params?
a80.params["javax.faces.source"]||a80.params["source"]:null;
this._dtsContext=a80._context.context;
this._dtsRequestMethod=a80._context.method;
this._htmlForm=a81;
this._dtsSource=a80._source;
this._savedActionUrl=a81.action;
this._savedTarget=a81.target;
a81.method="POST";
a81.action=a82;
a81.target=a84;
this._appendParamNode(a85,a81,"Tr-XHR-Message","true");
if(a83)
{
for(var a89 in a83)
{
var a90=a83[a89];
this._appendParamNode(a85,a81,a89,a90);
}
}
if(this._iframeLoadCallback==null)
this._iframeLoadCallback=TrUIUtils.createCallback(this,this._handleIFrameLoad);
if(_agent.isIE)
this._autoCompleteForm(a81);
try
{
a81.submit();
}
catch(e)
{
if(this._isMultipartForm(a81))
{
var a91=_createFacesMessage(
'org.apache.myfaces.trinidad.component.core.input.CoreInputFile.INPUT_FILE_ERROR');
if(!TrMessageBox.isPresent())
alert(a91.getDetail());
else
TrMessageBox.addMessage(null,null,a91);
}
else
{
throw e;
}
}
this._window.setTimeout(this._iframeLoadCallback,50);
}
TrRequestQueue.prototype._appendParamNode=function(a92,a93,a94,a95)
{
var a96=this._paramNodes;
if(!a96)
{
a96=new Array();
this._paramNodes=a96;
}
if(a94=="source")
{
var a97=a92.getElementsByName("source");
if(a97.length>0)
{
for(var a98=0,size=a97.length;a98<size;++a98)
{
var a99=a97[a98];
if(a99.tagName=="INPUT")
{
a99.value=a95;
return;
}
}
}
}
var a100=a92.createElement("input");
a100.type="hidden";
a100.name=a94;
a100.value=a95;
a96.push(a100);
a93.appendChild(a100);
}
TrRequestQueue.prototype._clearParamNodes=function()
{
var a101=this._paramNodes;
if(a101)
{
var a102=a101[0].parentNode;
var a103=a101.length;
for(var a104=0;a104<a103;a104++)
{
a102.removeChild(a101[a104]);
}
delete this._paramNodes;
}
}
TrRequestQueue.prototype._isIFrameBlankHTML=function(a105)
{
return(_agent.isSafari&&a105.documentURI=="about:blank");
}
TrRequestQueue.prototype._handleIFrameLoad=function()
{
var a106=this._getDomDocument();
var a107=_agent.isIE;
var a108=TrRequestQueue._MULTIPART_FRAME;
var a109,iframeDoc;
if(a107)
{
a109=a106.frames[a108];
var a110=a109.document;
}
else
{
a109=a106.getElementById(a108);
a110=a109.contentDocument;
}
try
{
if(!a110.documentElement||!a110.documentElement.firstChild
||(a107&&a110.readyState!="complete")||
this._isIFrameBlankHTML(a110))
{
this._window.setTimeout(this._iframeLoadCallback,50);
}
else
{
this._onIFrameLoadComplete(a110,this._dtsContext,
this._dtsRequestMethod);
}
}
catch(e)
{
TrRequestQueue._alertError();
TrRequestQueue._logError("Error while performing request",e);
this._htmlForm.action=this._savedActionUrl;
this._htmlForm.target=this._savedTarget;
}
}
TrRequestQueue.prototype._onIFrameLoadComplete=function(
a111,
a112,
a113)
{
try
{
var a114=new TrIFrameXMLRequestEvent(
a111,
this._dtsSource,
this._htmlForm.id);
this._broadcastRequestStatusChanged(a112,a113,a114);
}
finally
{
if(a111.firstChild)
a111.removeChild(a111.firstChild);
this._htmlForm.action=this._savedActionUrl;
this._htmlForm.target=this._savedTarget;
delete this._dtsSource;
this._clearParamNodes();
this._requestDone();
}
}
TrRequestQueue.prototype._handleRequestCallback=function(
a115
)
{
var a116=a115.getCompletionState();
if(a116!=TrXMLRequest.COMPLETED)
return;
var a117=0;
var a118=TrRequestQueue._getFailedConnectionText();
try
{
a117=a115.getStatus();
}
catch(e)
{
}
if((a117<200||a117>=300)&&(a117!=0))
{
TrRequestQueue._alertError();
TrRequestQueue._logError("Error StatusCode(",
a117,
") while performing request\n",
a115.getResponseText());
}
try
{
if(a117!=0)
{
var a119=new TrXMLRequestEvent(
TrXMLRequestEvent.STATUS_COMPLETE,
a115,
a115.__dtsRequestSource,
a115.__dtsRequestFormId);
this._broadcastRequestStatusChanged(
a115.__dtsRequestContext,
a115.__dtsRequestMethod,
a119);
}
}
finally
{
a115.cleanup();
delete a115;
this._requestDone();
}
}
TrRequestQueue.prototype._requestDone=function()
{
if(this._requestQueue.length>0)
{
this._doRequest();
}
else
{
this._state=TrRequestQueue.STATE_READY;
this._broadcastStateChangeEvent(TrRequestQueue.STATE_READY);
}
}
TrRequestQueue.prototype.addStateChangeListener=function(a120,a121)
{
var a122=this._stateChangeListeners;
if(!a122)
{
a122=new Array();
this._stateChangeListeners=a122;
}
a122.push(a120);
a122.push(a121);
}
TrRequestQueue.prototype.removeStateChangeListener=function(a123,a124)
{
var a125=this._stateChangeListeners;
var a126=a125.length;
for(var a127=0;a127<a126;a127++)
{
var a128=a125[a127];
a127++;
if(a128==a123)
{
var a129=a125[a127];
if(a129===a124)
{
a125.splice(a127-1,2);
}
}
}
if(a125.length==0)
{
this._stateChangeListeners=null;
}
}
TrRequestQueue.prototype.getDTSState=function()
{
return this._state;
}
TrRequestQueue.prototype.__useJsfBuiltInAjaxForXhr=function()
{
return this._useJsfBuiltInAjaxForXhr;
}
TrRequestQueue.prototype.__disableJsfBuiltInAjaxForXhr=function()
{
this._useJsfBuiltInAjaxForXhr=false;
}
TrRequestQueue.prototype._broadcastStateChangeEvent=function(a130)
{
var a131=this._stateChangeListeners;
if(a131)
{
var a132=a131.length;
for(var a133=0;a133<a132;a133++)
{
try
{
var a134=a131[a133];
a133++;
var a135=a131[a133];
if(a135!=null)
a134.call(a135,a130);
else
a134(a130);
}
catch(e)
{
TrRequestQueue._logError("Error on DTS State Change Listener",e);
}
}
}
}
TrRequestQueue.prototype._getDomDocument=function()
{
return this._window.document;
}
TrRequestQueue._getFailedConnectionText=function()
{
return"Connection failed";
}
TrRequestQueue._alertError=function()
{
var a136=TrRequestQueue._getFailedConnectionText();
if(a136!=null)
alert(a136);
}
TrRequestQueue._logWarning=function(a137)
{
if(window.console&&console.warn)
console.warn(arguments);
}
TrRequestQueue._logError=function(a138)
{
if(window.console&&console.error)
{
console.error(arguments);
}
}

function TrXMLRequest()
{
this.isSynchronous=false;
this.callback=null;
this._state=TrXMLRequest.UNINITIALIZED;
this.headers=new Object();
this.xmlhttp=TrXMLRequest._createXmlHttpRequest();
}
TrXMLRequest.UNINITIALIZED=0;
TrXMLRequest.LOADING=1;
TrXMLRequest.LOADED=2;
TrXMLRequest.INTERACTIVE=3;
TrXMLRequest.COMPLETED=4;
TrXMLRequest.prototype.setSynchronous=
function(a0)
{
this.isSynchronous=a0;
};
TrXMLRequest.prototype.setCallback=
function(a1)
{
this.callback=a1;
};
TrXMLRequest.prototype.getCompletionState=
function()
{
return this._state;
};
TrXMLRequest.prototype.getStatus=
function()
{
return this.xmlhttp.status;
}
TrXMLRequest.prototype.getResponseXML=
function()
{
return this.xmlhttp.responseXML;
}
TrXMLRequest.prototype.getResponseText=
function()
{
return this.xmlhttp.responseText;
}
TrXMLRequest.prototype.send=
function(a2,a3)
{
var a4=this.xmlhttp;
if(!this.isSynchronous)
{
var a5=new Function("arguments.callee.obj.__onReadyStateChange();");
a5.obj=this;
a4.onreadystatechange=a5;
}
var a6=a3?"POST":"GET";
a4.open(a6,a2,!this.isSynchronous);
for(var a7 in this.headers)
a4.setRequestHeader(a7,this.headers[a7]);
a4.setRequestHeader("Tr-XHR-Message","true");
a4.send(a3);
if(this.isSynchronous)
{
this._state=a4.readyState;
}
}
TrXMLRequest.prototype.getResponseHeader=
function(a8)
{
return this.xmlhttp.getResponseHeader(a8);
}
TrXMLRequest.prototype.getAllResponseHeaders=
function()
{
return this.xmlhttp.getAllResponseHeaders();
}
TrXMLRequest.prototype.setRequestHeader=
function(a9,a10)
{
this.headers[a9]=a10;
}
TrXMLRequest._createXmlHttpRequest=function()
{
var a11;
if(window.XMLHttpRequest)
{
a11=new XMLHttpRequest();
}
else if(window.ActiveXObject)
{
try
{
a11=new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e)
{
try
{
a11=new ActiveXObject("Microsoft.XMLHTTP");
}
catch(e)
{
}
}
}
return a11;
}
TrXMLRequest.prototype.__onReadyStateChange=
function()
{
this._state=this.xmlhttp.readyState;
if(this.callback)
this.callback(this);
}
TrXMLRequest.prototype.cleanup=function()
{
this.callback=null
delete this.xmlhttp;
}
function TrXMLJsfAjaxRequest(
a0,
a1,
a2)
{
this.isSynchronous=false;
this.callback=null;
this._event=a0;
this._params=a1||new Object();
this._status=0;
this._state=TrXMLRequest.UNINITIALIZED;
this._formId=a2;
}
TrXMLJsfAjaxRequest.prototype.setCallback=function(a3)
{
this.callback=a3;
}
TrXMLJsfAjaxRequest.prototype.getCompletionState=function()
{
return this._state;
}
TrXMLJsfAjaxRequest.prototype.getStatus=function()
{
return this._status;
}
TrXMLJsfAjaxRequest.prototype.getResponseXML=function()
{
return this._responseXML;
}
TrXMLJsfAjaxRequest.prototype.getResponseText=function()
{
return this._responseText;
}
TrXMLJsfAjaxRequest.prototype.cleanup=function()
{
if(this._formElements!=null)
{
for(var a4 in this._formElements)
{
var a5=this._origFormValues[a4];
this._formElements[a4].value=a5;
}
}
delete this._origFormValues;
delete this._formElements;
this.callback=null;
}
TrXMLJsfAjaxRequest.prototype._ajaxCallback=function(
a6
)
{
switch(a6.status)
{
case"begin":
this._state=TrXMLRequest.LOADING;
break;
case"complete":
this._state=TrXMLRequest.LOADED;
break;
case"success":
default:
this._state=TrXMLRequest.COMPLETED;
break;
}
if(a6.status!="begin")
{
this._status=a6.responseCode;
this._responseXML=a6.responseXML;
this._responseText=a6.responseText;
}
if(this.callback)
{
this.callback(this);
}
}
TrXMLJsfAjaxRequest.prototype.__onerror=function(
a7
)
{
this._state=TrXMLRequest.COMPLETED;
this._status=a7.responseCode;
this._responseXML=a7.responseXML;
this._responseText=a7.responseText;
if(this.callback)
{
this.callback(this);
}
}
TrXMLJsfAjaxRequest.prototype.send=function()
{
var a8=this._params.source?
_getElementById(window.document,this._params.source):null;
var a9=TrUIUtils.createCallback(this,this._ajaxCallback);
var a10={
"onevent":a9,
"onerror":a9,
"Tr-PPR-Message":true
};
for(var a11 in this._params)
{
a10[a11]=this._params[a11];
}
this._origFormValues={};
this._formElements={};
if(this._formId!=null)
{
var a12=document.getElementById(this._formId);
if(a12!=null)
{
var a13=a12.elements;
for(var a14=0;a14<a13.length;++a14)
{
var a15=a13[a14];
if(a15.name&&!a15.disabled&&!(a15.tagName=="INPUT"&&a15.type=="submit"))
{
for(a11 in a10)
{
if(a11==a15.name)
{
var a16=a10[a11];
delete a10[a11];
this._origFormValues[a11]=a15.value;
this._formElements[a11]=a15;
a15.value=a16;
break;
}
}
}
}
}
}
jsf.ajax.request(
a8,
this._event,
a10);
delete this._event;
}
TrXMLJsfAjaxRequest.prototype.setSynchronous=
TrXMLJsfAjaxRequest.prototype.setRequestHeader=function(){}
TrXMLJsfAjaxRequest.prototype.getAllResponseHeaders=function()
{
return new Object();
};
TrXMLJsfAjaxRequest.prototype.getResponseHeader=function()
{
return null;
};

function TrXMLRequestEvent(
a0,
a1,
a2,
a3
)
{
this._status=a0;
this._request=a1;
this._source=a2;
this._formId=a3;
}
TrXMLRequestEvent.STATUS_QUEUED=1;
TrXMLRequestEvent.STATUS_SEND_BEFORE=2;
TrXMLRequestEvent.STATUS_SEND_AFTER=3;
TrXMLRequestEvent.STATUS_COMPLETE=4;
TrXMLRequestEvent.prototype.getFormId=function()
{
return this._formId;
}
TrXMLRequestEvent.prototype.getStatus=function()
{
return this._status;
}
TrXMLRequestEvent.prototype.getSource=function()
{
return this._source;
}
TrXMLRequestEvent.prototype.getResponseXML=function()
{
return this._request.getResponseXML();
}
TrXMLRequestEvent.prototype._isResponseValidXML=function()
{
var a4=this._request.getResponseXML();
if(!a4)
return false;
var a5=a4.documentElement;
if(!a5)
return false;
var a6=a5.nodeName;
if(!a6)
a6=a5.tagName;
if(a6=="parsererror")
return false;
return true;
}
TrXMLRequestEvent.prototype.getResponseText=function()
{
return this._request.getResponseText();
}
TrXMLRequestEvent.prototype.getResponseStatusCode=function()
{
return this._request.getStatus();
}
TrXMLRequestEvent.prototype._getAllResponseHeaders=function()
{
return this._request.getAllResponseHeaders();
}
TrXMLRequestEvent.prototype.getResponseHeader=function(
a7
)
{
var a8=this._request.getAllResponseHeaders();
return(a8.indexOf(a7)!=-1)?
this._request.getResponseHeader(a7)
:null;
}
TrXMLRequestEvent.prototype.isPprResponse=function()
{
var a9=true;
if(a9&&(!this._isResponseValidXML()))
{
TrRequestQueue._logError("Invalid PPR response."+
" The response-headers were:\n"+
this._getAllResponseHeaders()+
"\n The invalid response was:\n"+
this.getResponseText());
}
return a9;
}
TrXMLRequestEvent.prototype.getResponseContentType=function()
{
this.getResponseHeader("Content-Type");
}
TrXMLRequestEvent.prototype.isJsfAjaxRequest=function()
{
return(this._request instanceof TrXMLJsfAjaxRequest);
};

function TrIFrameXMLRequestEvent(
a0,
a1,
a2)
{
this._iframeDoc=a0;
this._source=a1;
this._formId=a2;
}
TrIFrameXMLRequestEvent.prototype.getSource=function()
{
return this._source;
}
TrIFrameXMLRequestEvent.prototype.getFormId=function()
{
return this._formId;
}
TrIFrameXMLRequestEvent.prototype.getStatus=function()
{
return TrXMLRequestEvent.STATUS_COMPLETE;
}
TrIFrameXMLRequestEvent.prototype.getResponseXML=function()
{
var a3=_agent.isIE;
var a4=this._iframeDoc;
if(a3&&a4.XMLDocument)
return a4.XMLDocument;
else
return a4;
}
TrIFrameXMLRequestEvent.prototype.getResponseText=function()
{
var a5=_agent.isIE;
var a6=this._iframeDoc,xmlDocument=null;
if(a5&&a6.XMLDocument)
xmlDocument=a6.XMLDocument;
else if(window.XMLDocument&&this._isResponseValidXML())
xmlDocument=a6;
if(xmlDocument)
{
if(typeof XMLSerializer!="undefined")
{
return(new XMLSerializer()).serializeToString(xmlDocument);
}
else if(a5)
{
return xmlDocument.xml;
}
else
{
return null;
}
}
else
return a6.documentElement.innerHTML;
}
TrIFrameXMLRequestEvent.prototype._isResponseValidXML=function()
{
var a7=_agent.isIE;
var a8=this._iframeDoc;
if(a7&&a8.XMLDocument)
return true;
else if(window.XMLDocument&&(a8 instanceof XMLDocument))
return true;
else if(_agent.isSafari&&a8.xmlVersion!=null)
return true;
else
return false;
}
TrIFrameXMLRequestEvent.prototype.getResponseStatusCode=function()
{
return 200;
}
TrIFrameXMLRequestEvent.prototype.isPprResponse=function()
{
var a9=_agent.isIE;
var a10=this._iframeDoc;
var a11=false;
if(a9&&a10.XMLDocument)
{
var a12=a10.XMLDocument,childNodes=a12.childNodes;
if(childNodes.length>=2&&childNodes[1].nodeName=="partial-response")
a11=true;
}
else
{
if(a10.firstChild&&a10.firstChild.nodeName=="partial-response")
a11=true;
}
return a11;
}
TrIFrameXMLRequestEvent.prototype.getResponseContentType=function()
{
if(this._isResponseValidXML())
return"text/xml";
return"text/html";
}
TrIFrameXMLRequestEvent.prototype.isJsfAjaxRequest=function()
{
return false;
};
