#!/bin/bash
xdg-open http://localhost:1313
hugo server --buildFuture --buildDrafts --navigateToChanged
