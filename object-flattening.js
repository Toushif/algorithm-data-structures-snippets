//Flatten an object while preserving the keys. For example, 
//if the input is {‘key1’: 1, ‘key2’: {‘key3’: 3, ‘key4’: 4, ‘key5’:{‘key6’: 6}}}, 
//then the output will be {‘key1’: 1, ‘key2.key3’: 3, ‘key2.key4’: 4, ‘key2.key5.key6’:6}

function flatten(obj, s = "", ans = {}) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            var store;

            if (s !== "") {
                store = s + "." + key;
            } else {
                store = key;
            }

            flatten(obj[key], store, ans);
        } else {
            var store;

            if (s !== "") {
                store = s + "." + key;
            } else {
                store = key;
            }

            ans[store] = obj[key];
        }
    }

    return ans;
}

flatten({ key1: 1, key2: { key3: 3, key4: 4, key5: { key6: 6 } } });

//Output- {key1: 1, key2.key3: 3, key2.key4: 4, key2.key5.key6: 6}
