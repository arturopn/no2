(function(b){
					var a=b.util,c=20;
					b.mp3=function(d){
						this.obj=d;
						this.resizable=true;
						this.height=d.height?parseInt(d.height,10):50;
						if(b.options.showMovieControls==true){
							this.height+=c
						}
						this.width=d.width?parseInt(d.width,10):300};
						b.mp3.prototype={append:function(l,e,n){
							this.id=e;
							var j=document.createElement("div");
							j.id=e;
							l.appendChild(j);
							var k=n.resize_h,
									o=n.resize_w,
									f=b.path+"src/libraries/mediaplayer/player_audio.swf",
									m=b.options.flashVersion,
									d=b.path+"src/libraries/swfobject/expressInstall.swf",
									g=a.apply({
														file:this.obj.content,
														height:k,
														width:o,autostart:(b.options.autoplayMovies?"true":"false"),
														controlbar:(b.options.showMovieControls?"bottom":"none")
														//backcolor:"0x000000",
														//frontcolor:"0xCCCCCC",
														//lightcolor:"0x557722"
														},b.options.flashVars),
									i=b.options.flashParams;
									
									swfobject.embedSWF(f,e,o,k,m,d,g,i)},
									remove:function(){
										swfobject.expressInstallCallback();
										swfobject.removeSWF(this.id)
									}
								}})(Shadowbox);