package com.PhoneGap.Plugin;

import org.json.JSONArray;
import android.content.Context;
import android.telephony.TelephonyManager;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

 @ SuppressWarnings("deprecation")
public class IMSI extends Plugin {
	 
	 @ Override
	public PluginResult execute(String Action, JSONArray Args, String CallBackId) {
		PluginResult.Status eStatus = PluginResult.Status.OK;
		if (Action.equals("GetIMSI")) {
			return new PluginResult(eStatus, GetIMSI());
		} else {
			eStatus = PluginResult.Status.INVALID_ACTION;
			return new PluginResult(eStatus, "");
		}
	}
	 
	private String GetIMSI() {
		TelephonyManager eTelephonyManager = (TelephonyManager)this.ctx.getSystemService(Context.TELEPHONY_SERVICE);
		return eTelephonyManager.getSubscriberId();
	}
	
}
