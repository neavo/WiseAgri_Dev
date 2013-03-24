package com.PhoneGap.Plugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import org.json.JSONArray;
import org.json.JSONException;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;

public class VideoPlayer extends CordovaPlugin {
	private static final String YOU_TUBE = "youtube.com";
	private static final String ASSETS = "file:///android_asset/";
	 @ Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
		PluginResult.Status status = PluginResult.Status.OK;
		String result = "";
		try {
			if (action.equals("playVideo")) {
				playVideo(args.getString(0));
			} else {
				status = PluginResult.Status.INVALID_ACTION;
			}
			callbackContext.sendPluginResult(new PluginResult(status, result));
		} catch (JSONException e) {
			callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
		}
		catch (IOException e) {
			callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION));
		}
		return true;
	}
	private void playVideo(String url)throws IOException {
		if (url.contains("bit.ly/") || url.contains("goo.gl/") || url.contains("tinyurl.com/") || url.contains("youtu.be/")) {
			URLConnection con = new URL(url).openConnection();
			con.connect();
			InputStream is = con.getInputStream();
			url = con.getURL().toString();
			is.close();
		}
		Uri uri = Uri.parse(url);
		Intent intent = null;
		if (url.contains(YOU_TUBE)) {
			uri = Uri.parse("vnd.youtube:" + uri.getQueryParameter("v"));
			if (isYouTubeInstalled()) {
				intent = new Intent(Intent.ACTION_VIEW, uri);
			} else {
				intent = new Intent(Intent.ACTION_VIEW);
				intent.setData(Uri.parse("market://details?id=com.google.android.youtube"));
			}
		} else if (url.contains(ASSETS)) {
			String filepath = url.replace(ASSETS, "");
			String filename = filepath.substring(filepath.lastIndexOf("/") + 1, filepath.length());
			File fp = new File(this.cordova.getActivity().getFilesDir() + "/" + filename);
			if (!fp.exists()) {
				this.copy(filepath, filename);
			}
			uri = Uri.parse("file://" + this.cordova.getActivity().getFilesDir() + "/" + filename);
			intent = new Intent(Intent.ACTION_VIEW);
			intent.setDataAndType(uri, "video/*");
		} else {
			intent = new Intent(Intent.ACTION_VIEW);
			intent.setDataAndType(uri, "video/*");
		}
		this.cordova.getActivity().startActivity(intent);
	}
	private void copy(String fileFrom, String fileTo)throws IOException {
		InputStream in = this.cordova.getActivity().getAssets().open(fileFrom);
		FileOutputStream out = this.cordova.getActivity().openFileOutput(fileTo, Context.MODE_WORLD_READABLE);
		byte[]buf = new byte[1024];
		int len;
		while ((len = in.read(buf)) > 0)
			out.write(buf, 0, len);
		in.close();
		out.close();
	}
	private boolean isYouTubeInstalled() {
		PackageManager pm = this.cordova.getActivity().getPackageManager();
		try {
			pm.getPackageInfo("com.google.android.youtube", PackageManager.GET_ACTIVITIES);
			return true;
		} catch (PackageManager.NameNotFoundException e) {
			return false;
		}
	}
}
