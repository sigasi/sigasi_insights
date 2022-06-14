#! /usr/bin/env python3

import json

redirects = []

with open ('static/_redirects') as redirectfile:
    for line in redirectfile:
        strln = line.strip()
        if len(strln) > 0:
            grouped = strln.split()
            if grouped[0][0] == '#':
                continue
            elif len(grouped) == 2:
                if '*' in grouped[0]:
                    print("Found star:", grouped[0])
                    if ':splat' in grouped[1]:
                        # replace the '*' in grouped[0] with a ':splat*'
                        print("Found splat:", grouped[1])
                        redirects.append({"source": grouped[0].replace('*', ':splat*'), "destination": grouped[1], "type": 301})
                        # grouped[0] = grouped[0].replace('*', ':splat*')
                    else:
                        # Double the '*' in grouped[0]
                        print("No splat:", grouped[1])
                        redirects.append({"source": grouped[0].replace('*', '**'), "destination": grouped[1], "type": 301})
                        # grouped[0] = grouped[0].replace('*', '**')

                    # Also create a version without the '*'
                    redirects.append({"source": grouped[0].replace('/*', ''), "destination": grouped[1].replace(':splat', ''), "type": 301})
                else:
                    redirects.append({"source": grouped[0], "destination": grouped[1], "type": 301})
            else:
                print("===============================================================")
                print(grouped)
                raise Exception("Unexpected number of elements in redirect rule")

# Read existing Firebase json config file and add/replace the redirects
with open('firebase.json', 'r') as jf:
    firebase_json = json.load(jf)
    firebase_json["hosting"]["redirects"] = redirects

with open('firebase.json', 'w') as jf:
    json.dump(firebase_json, jf, indent=2)
