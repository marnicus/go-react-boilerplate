package web

import (
	"encoding/json"
	"errors"
	"io"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gorilla/mux"
	"github.com/ueokande/go-react-builderplate/repository"
)

func (h APIHandler) Login (w http.ResponseWriter, r *http.Request) {
	
}