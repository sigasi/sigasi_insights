def dateformat(value, format="%Y-%m-%d"):
    return value.strftime(format)

filters = {}
filters['dateformat'] = dateformat
