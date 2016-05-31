FROM    centos:centos7
MAINTAINER Hendrik Eeckhaut <hendrik.eeckhaut@sigasi.com>

RUN yum -y install epel-release
RUN yum -y update

RUN yum -y install python-pip python-devel gcc
RUN pip install --upgrade pip

RUN pip install urubu LinkChecker

VOLUME ["/sigasi_insights"]
WORKDIR /sigasi_insights

EXPOSE 8000

