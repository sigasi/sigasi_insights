FROM centos:latest

RUN yum install -y python bash python-devel make
RUN curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
RUN python get-pip.py
RUN pip install --upgrade pip
RUN pip install urubu --upgrade
# LinkChecker 

VOLUME ["/sigasi_insights"]
WORKDIR /sigasi_insights

EXPOSE 8000
