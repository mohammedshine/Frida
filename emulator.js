public final boolean isEmulator()

{

Object localObject = new StringBuilder();

((StringBuilder)localObject).append(Build.FINGERPRINT);

((StringBuilder)localObject).append(Build.DEVICE);

((StringBuilder)localObject).append(Build.MODEL);

((StringBuilder)localObject).append(Build.BRAND);

((StringBuilder)localObject).append(Build.PRODUCT);

((StringBuilder)localObject).append(Build.MANUFACTURER);

((StringBuilder)localObject).append(Build.HARDWARE);

localObject = ((StringBuilder)localObject).toString();

if (localObject != null)

{

localObject = ((String)localObject).toLowerCase();

Intrinsics.checkExpressionValueIsNotNull(localObject, “(this as java.lang.String).toLowerCase()”);

CharSequence localCharSequence1 = (CharSequence)localObject;

CharSequence localCharSequence2 = (CharSequence)”generic”;

boolean bool = false;

if ((StringsKt.contains$default(localCharSequence1, localCharSequence2, false, 2, null)) || (StringsKt.contains$default((CharSequence)localObject, (CharSequence)”unknown”, false, 2, null)) || (StringsKt.contains$default((CharSequence)localObject, (CharSequence)”emulator”, false, 2, null)) || (StringsKt.contains$default((CharSequence)localObject, (CharSequence)”sdk”, false, 2, null)) || (StringsKt.contains$default((CharSequence)localObject, (CharSequence)”vbox”, false, 2, null)) || (StringsKt.contains$default((CharSequence)localObject, (CharSequence)”genymotion”, false, 2, null)) || (StringsKt.contains$default((CharSequence)localObject, (CharSequence)”x86", false, 2, null)) || (StringsKt.contains$default((CharSequence)localObject, (CharSequence)”goldfish”, false, 2, null)) || (StringsKt.contains$default((CharSequence)localObject, (CharSequence)”test-keys”, false, 2, null))) {

bool = true;

}

return bool;
